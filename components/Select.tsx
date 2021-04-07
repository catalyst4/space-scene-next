import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Select = ({ value, children, placeholder }) => {

    const [open, setOpen] = useState<Boolean>(false)

    return (
        <Wrapper onClick={() => setOpen(!open)}>
            <Box value={value}>
                {value ? value : placeholder}
            </Box>
            {open && (
            <Dropdown>
                {children}
            </Dropdown>    
        )}
        </Wrapper>
    )
}

export { Select }

const Wrapper = styled.div`
    width: 100%;
    position: relative;
    cursor: pointer;
`

const Box = styled.div`
    padding: 15px 20px;
    width: 100%;
    border-radius: 15px;
    outline: none;
    border: none;
    background: none;
    font-size: 16px;
    color: ${props => props.value ? 'white' : '#505050'};
    font-weight: 500;
    border: 1px solid #202020;
    &::placeholder {
        color: #505050;
    }
`

const Dropdown = styled.div`
    width: 100%;
    background: #202020;
    position: absolute;
    margin-top: 10px;
    left: 0;
    border-radius: 15px;
    z-index: 999;
`