import React from 'react'
import styled from 'styled-components'
import { SideHeading } from '../../SideHeading'
import { Item } from './Item'

const FlightConditions = () => {

    const data = [
        {
            name: 'FAA Approval',
            status: 1
        },
        {
            name: 'Static Fire Complete',
            status: 1
        },
        {
            name: 'Temp. Flight Restriction',
            status: 1
        },
        {
            name: 'Marine Hazard Zone',
            status: 2
        },
        {
            name: 'Road Closure',
            status: 2
        },
        {
            name: 'SpaceX Confirmation',
            status: 1
        },
    ]

    return (
        <div>
            <SideHeading>Flight Conditions</SideHeading>
            <Box>
                {data.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Box>
        </div>
    )
}

export { FlightConditions }

const Box = styled.div`
    background: ${props => props.theme.surface};
    border-radius: 20px;
    box-shadow: ${props => props.theme.boxShadow};
    margin-bottom: 20px;
`