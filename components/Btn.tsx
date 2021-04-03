import React from 'react'
import styled from 'styled-components'

const Btn = ({ children, padding, onClick }) => {
    return (
        <Wrapper>
            <Button padding={padding} onClick={onClick}>{children}</Button>
        </Wrapper>
    )
}

export { Btn }

const Wrapper = styled.div`
    background: #303030;
    padding: 1px;
    margin-left: 15px;
    border-radius: 20px;
`

const Button = styled.button`
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    background: #121212;
    color: white;
    padding: ${props => props.padding};
    outline: none;
    border: none;
    border-radius: 20px;
    letter-spacing: 1px;
    cursor: pointer;
`