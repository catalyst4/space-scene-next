import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface Update {
    title: String,
    desc: String,
    timestamp: number,
    vehicle: Vehicle
}

interface Vehicle {
    name: String
}

interface Item {
    first?: Boolean,
    next?: Boolean,
    last?: Boolean,
    update?: Update,
}

const Item = ({ first, last, update }: Item) => {

    const shortDesc = (update.desc).substring(0,100)
    const [fullDesc, setFullDesc] = useState<Boolean>(shortDesc.length < 50 ? true : false)
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

    const next = timestamp > new Date().getTime()

    return (
        <Wrapper first={first} last={last} next={next}>
            <Border>
                <Box>
                    {next && (
                        <Next>Next Up</Next>
                    )}
                    <Vehicle>{update.vehicle.name}</Vehicle>
                    <Heading>{update.title}</Heading>
                    {fullDesc ? (
                        <Desc>{update.desc}</Desc>
                    ) : (
                        <Desc>{shortDesc}... <ReadMore onClick={() => setFullDesc(true)}>Read More</ReadMore></Desc>    
                    )}
                    <Flex>
                        <DateTime>{dateFormatted}</DateTime>
                    </Flex>    
                </Box>
            </Border>    
        </Wrapper>
    )
}

export { Item }

const Wrapper = styled.div`
    position: relative;
    padding-bottom: 20px;
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
        height: ${props => props.last ? '100%' : '100%'};
        position: absolute;
        top: ${props => props.first ? '50%' : '0%'};
        left: -39px;
        background: ${props => props.last ? `linear-gradient(to top, rgba(0,0,0,0), ${props.theme.timeline} 50%)` : props.theme.timeline};
        @media (max-width: 768px) {
            width: 5px;
            left: -24px;
            top: ${props => props.first ? '50%' : '0%'};
        }
    }
`

const Border = styled.div`
    padding: 2px;
    background: ${props => props.theme.pinkGradient};
    border-radius: 20px;
    box-shadow: ${props => props.theme.boxShadow};
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

const Next = styled.div`
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
    color: rgba(255,255,255,0.9);  
`

const ReadMore = styled.a`
    margin-left: 10px;
    font-size: 16px;
    color: white;
    cursor: pointer;
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