import React from 'react'
import styled from 'styled-components'

interface TextField {
    value: String,
    placeholder?: String,
    error?: Boolean,
    helperText?: String,
    onChange: Function,
}

const TextField = ({ value, placeholder, error, onChange }: TextField) => {
    return (
        <Wrapper error={error}>
            <Input
                value={value ? value : ''}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Wrapper>
    )
}

export { TextField }

const Wrapper = styled.div`
    width: 100%;
    padding: 1px;
    background: #202020;
    border-radius: 15px;
    margin-bottom: 15px;
`

const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    outline: none;
    border: none;
    background: #121212;
    padding: 13px 20px;
    border-radius: 15px;
    color: white;
    &::placeholder { 
        color: #505050;
    }
`