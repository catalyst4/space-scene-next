import React, { useEffect } from 'react'
import styled from 'styled-components'

const Modal = ({ children, open, onClose }) => {

    useEffect(() => {
        if(open === true) {
            window.onclick = (e) => {
                const bg = document.getElementById('bg')
                if(e.target === bg) {
                    onClose()
                }
            }
            document.addEventListener('keydown', function(e) {
                if(e.key === 'Escape') {
                    onClose()
                }
            })
        }
    }, [open])
    
    return (
        <>
            <Bg id="bg">
                <Border id="modal">
                    <Box>
                        {children}
                    </Box>
                </Border>
            </Bg>
        </>
    )
}

export { Modal }

const Bg = styled.div`
    width: 100%;
    min-height: 100%;
    background: rgba(0, 0, 0,0.8);
    top: 0;
    left: 0;
    position: absolute;
    z-index: 99999999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Border = styled.div`
    background: ${props => props.theme.pinkGradient};
    padding: 3px;
    border-radius: 20px;
`

const Box = styled.div`
    width: 400px;
    background: #121212;
    padding: 25px;
    border-radius: 20px;
`