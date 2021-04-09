import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const DateTime = ({ timestamp, updateTimestamp }) => {

    const initialDate = new Date(timestamp)
    const [day, setDay] = useState<number>(initialDate.getDate())
    const [month, setMonth] = useState<number>(initialDate.getMonth() + 1)
    const [year, setYear] = useState<number>(initialDate.getFullYear())
    
    useEffect(() => {

        updateTimestamp(new Date(year, month - 1, day).getTime())

    }, [day, month, year])

    return (
        <Wrapper>
            <Input 
                value={day}
                placeholder="Day"
                onChange={(e) => setDay(e.target.value)}
            />
            <Input 
                value={month}
                placeholder="Month"
                onChange={(e) => setMonth(e.target.value)}
            />
            <Input 
                value={year}
                placeholder="Year"
                onChange={(e) => setYear(e.target.value)}
            />
        </Wrapper>
    )
}

export { DateTime }

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    border: 1px solid #202020;
    padding: 15px 20px;
    border-radius: 15px;
`

const Input = styled.input`
    width: 100%;
    outline: none;
    border: none;
    background: none;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: white;
    &::placeholder {
        color: #505050;
    }
`