import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface Item {
    next?: Boolean,
    last?: Boolean,
}

const Item = ({ next, last, update }) => {

    const [timestamp, setTimestamp] = useState<number>(update.timestamp)
    const [date, setDate] = useState<Date>(new Date(timestamp))

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday']

    const months = [ 'January', 'February', 'March', 'April','May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December' ]

    const dateFormatted = 
        days[date.getDay()] + ', ' 
        + date.getDate() + ' ' 
        + months[date.getMonth()] + ' • ' 
        + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' 
        + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())

    useEffect(() => {
        setDate(new Date(timestamp))
    }, [timestamp])

    return (
        <Border last={last}>
            <Box>
                {next && (
                    <Next>Next Up</Next>
                )}
                <Vehicle>{update.vehicle.name}</Vehicle>
                <Heading>{update.title}</Heading>
                <Desc>{update.desc}</Desc>
                <Flex>
                    <DateTime>{dateFormatted}</DateTime>
                </Flex>
            </Box>
            {/* <Last /> */}
        </Border>
    )
}

export { Item }

const Border = styled.div`
    padding: 2px;
    background: ${props => props.theme.pinkGradient};
    border-radius: 20px;
    position: relative;
    margin-bottom: 20px;
    box-shadow: ${props => props.theme.boxShadow};
    &::before {
        content: '';
        width: 15px;
        height: 15px;
        position: absolute;
        top: calc(50% - 12px);
        left: -50px;
        background: #121212;
        border: 7px solid ${props => props.theme.timeline};
        border-radius: 99999px;
        z-index: 99999;
        @media (max-width: 768px) {
            width: 10px;
            height: 10px;
            left: -32px;
            border: 5px solid ${props => props.theme.timeline};
        }
    }
    &::after {
        &:last-child {
            background: red;
        }
        content: '';
        width: 7px;
        height: ${props => props.last ? '50%' : '100%'};
        position: absolute;
        top: 60%;
        left: -39px;
        background: ${props => props.last ? `linear-gradient(to top, rgba(0,0,0,0), ${props.theme.timeline})` : props.theme.timeline};
        @media (max-width: 768px) {
            width: 5px;
            left: -24px;
            top: 50%;
        }
    }
`

const Box = styled.div`
    padding: 20px;
    border-radius: 20px;
    background: ${props => props.theme.surface};
    position: relative;
    @media (max-width: 768px) {
        padding: 15px 20px;
    }
`

const Next = styled.span`
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
`

const Vehicle = styled.span`
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
`

const Heading = styled.h3`
    font-size: 36px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`

const Desc = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;    
`

const Flex = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const DateTime = styled.span`
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 30px;
    opacity: 0.5;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`