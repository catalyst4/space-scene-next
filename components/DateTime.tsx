import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Select } from './Select'

const DateTime = ({ timestamp, updateTimestamp }) => {

    const dayNow = timestamp ? new Date(timestamp).getDate() : new Date().getDate()
    const monthNow = timestamp ? new Date(timestamp).getMonth() : new Date().getMonth()
    const hoursNow = timestamp ? new Date(timestamp).getHours() : new Date().getHours()
    const minutesNow = timestamp ? new Date(timestamp).getMinutes() : new Date().getMinutes()
    const months = [ 'January', 'February', 'March', 'April','May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December' ]

    const [day, setDay] = useState<number>(dayNow)
    const [month, setMonth] = useState<number>(monthNow)
    const [hours, setHours] = useState<number>(hoursNow)
    const [minutes, setMinutes] = useState<number>(minutesNow)
    const [year, setYear] = useState<number>(new Date().getFullYear()) 

    const monthFormatted = months[month]

    useEffect(() => {
        console.log('updating...')
        updateTimestamp((new Date(year, month, day, hours, minutes)).getTime())
    }, [day, month, hours, minutes, year])

    const updateMonth = (m) => {
        setMonth(months.indexOf(m))
    }

    return (
        <Wrapper>
            <Flex>
                <div style={{width: '70%'}}>
                    <Select 
                        value={monthFormatted}
                        placeholder="Month"
                    >
                        {months.map((month, i) => (
                            <Item key={i} onClick={() => updateMonth(month)}>{month}</Item>
                        ))}
                    </Select>      
                </div>
                <div style={{width: '23%'}}>
                    <Input 
                        value={day}
                        placeholder="Day"
                        onChange={(e) => setDay(e.target.value)}
                    />     
                </div>    
            </Flex>
            <div style={{width: '35%', display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '46%'}}>
                    <Input 
                        value={hours}
                        placeholder="Hours"
                        onChange={(e) => setHours(e.target.value)}
                    />      
                </div>
                <div style={{width: '46%'}}>
                    <Input
                        value={minutes}
                        placeholder="Minutes"
                        onChange={(e) => setMinutes(e.target.value)}
                    />     
                </div>    
            </div>
            
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
`

const Flex = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Input = styled.input`
    height: 57px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: 1px solid #202020;
    padding: 15px 10px;
    background: none;
    border-radius: 15px;
    font-size: 16px;
    text-align: center;
    color: white;
    font-weight: 600;
    &::placeholder {
        color: #505050;
    }
`

const Item = styled.div`
    padding: 8px 20px;
    cursor: pointer;
`