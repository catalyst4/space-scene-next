import React from 'react'
import styled from 'styled-components'

interface TextField {
    value: String,
    textarea?: Boolean,
    placeholder?: String,
    error?: Boolean,
    helperText?: String,
    onChange: Function,
    alternative?: Boolean
}

const TextField = ({ value, textarea, alternative, placeholder, error, onChange }: TextField) => {
    return (
        <Wrapper alternative={alternative} error={error}>
            {textarea ? (
                <TextArea
                    alternative={alternative}
                    value={value ? value : ''}
                    placeholder={placeholder}
                    onChange={onChange}
                    rows="8"
                />
            ) : (
                <Input
                    alternative={alternative}
                    value={value ? value : ''}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            )}
        </Wrapper>
    )
}

export { TextField }

const Wrapper = styled.div`
    width: 100%;
    padding: 1px;
    background: ${props => props.alt ? '#121212' : '#202020'};
    border-radius: 15px;
    margin-bottom: 15px;
`

const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    outline: none;
    border: none;
    background: ${props => props.alt ? '#202020' : '#121212'};
    padding: 13px 20px;
    border-radius: 15px;
    color: white;
    &::placeholder { 
        color: #505050;
    }
`

const TextArea = styled.textarea`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    outline: none;
    border: none;
    background: ${props => props.alt ? '#202020' : '#121212'};
    padding: 13px 20px;
    border-radius: 15px;
    color: white;
    resize: vertical;
    &::placeholder { 
        color: #505050;
    }
`