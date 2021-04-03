import React from 'react'
import { SubHeading } from '../../../SubHeading'
import styled from 'styled-components'
import { Item } from './Item'

const FlightConditions = () => {
    return (
        <>
            <SubHeading>Flight Conditions</SubHeading> 
            <Wrapper>
                <Item />
                <Item />
                <Item />
            </Wrapper>
        </>
    )
}

export { FlightConditions }

const Wrapper = styled.div`
    width: 100%;
    background: ${props => props.theme.surface};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: 20px;
`