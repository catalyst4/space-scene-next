import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Select = ({ value, placeholder, onChange, data, updateMonth }) => {

    const [open, setOpen] = useState<Boolean>(false)
    const [months, setMonths] = useState<string[]>(data)

    useEffect(() => {

        const toggleOpen = data.filter(month => {
            if(month === value) {
                return true
            }
        })
        
        if(toggleOpen.length > 0) {
            setOpen(false)
        } else {
            setOpen(true)
        }


        const updatedMonths = data.filter(month => {
            const regex = new RegExp(`^${value}`, 'gi')
            return month.match(regex)
        })
        setMonths(updatedMonths)

    }, [value])

    return (
        <Box>
            <Input 
                value={value ? value : ''}
                placeholder={placeholder}
                onChange={onChange}
            />
            {open && (
            <Dropdown>
                {months.map((month, i) => (
                    <Item key={i} onClick={() => updateMonth(month)}>{month}</Item>
                ))}
            </Dropdown>    
        )}
        </Box>
    )
}

export { Select }

const Box = styled.div`
    outline: none;
    border: 1px solid #202020;
    padding: 15px 20px;
    background: none;
    border-radius: 15px;
    font-size: 16px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    position: relative;
`

const Input = styled.input`
    width: 100%;
    outline: none;
    border: none;
    background: none;
    font-size: 16px;
    color: white;
    font-weight: 600;
    &::placeholder {
        color: #505050;
    }
`

const Dropdown = styled.div`
    width: 100%;
    background: #202020;
    position: absolute;
    margin-top: 30px;
    left: 0;
    border-radius: 15px;
`

const Item = styled.div`
    padding: 8px 20px;
    cursor: pointer;
`