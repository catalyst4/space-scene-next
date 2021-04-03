import React from 'react'
import styled from 'styled-components'

const Header = ({ children }) => {
    return (
        <Bg>
            {children}
        </Bg>
    )
}

export { Header }

const Bg = styled.div`
    padding: 30px;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 2px;
    background: ${props => props.theme.pinkGradient};
    border-radius: 25px;
    margin-bottom: 30px;
`