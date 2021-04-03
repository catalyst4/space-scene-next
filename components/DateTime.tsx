import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Select } from './Select'

const DateTime = ({ timestamp, updateTimestamp }) => {

    const dayNow = new Date().getDate()
    const monthNow = new Date().getMonth()
    const hoursNow = new Date().getHours()
    const minutesNow = new Date().getMinutes()
    const months = [ 'January', 'February', 'March', 'April','May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December' ]

    const [day, setDay] = useState<number>(dayNow)
    const [month, setMonth] = useState<number>(monthNow)
    const [monthFormatted, setMonthFormatted] = useState<string>(months[month])
    const [hours, setHours] = useState<number>(hoursNow)
    const [minutes, setMinutes] = useState<number>(minutesNow)
    const [year, setYear] = useState<number>(new Date().getFullYear()) 

    useEffect(() => {
        updateTimestamp((new Date(year, month, day, hours, minutes)).getTime())
    }, [day, month, hours, minutes, year])


    return (
        <Wrapper>
            {/* <Input 
                style={{width: '19%'}}
                value={day}
                placeholder="Day"
                onChange={(e) => setDay(e.target.value)}
            />  
            <Select 
                value={monthFormatted}
                placeholder="Month"
                onChange={(e) => setMonthFormatted(e.target.value)}
                data={months} 
                updateMonth={(month) => setMonth(month)}
            /> 
            <Input 
                style={{width: '25%'}}
                value={hours}
                placeholder="Hours"
                onChange={(e) => setHours(e.target.value)}
            />  
            <Input
                style={{width: '25%'}} 
                value={minutes}
                placeholder="Minutes"
                onChange={(e) => setMinutes(e.target.value)}
            />   */}
        </Wrapper>
    )
}

export { DateTime }

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`

const Input = styled.input`
    outline: none;
    border: 1px solid #202020;
    padding: 15px 20px;
    background: none;
    border-radius: 15px;
    font-size: 16px;
    color: white;
    font-weight: 600;
    &::placeholder {
        color: #505050;
    }
`