import React from 'react'
import styled from 'styled-components'
import { SideHeading } from '../../SideHeading'
import { Item } from './Item'

const TFRs = () => {
    return (
        <div>
            <SideHeading>Temp. Flight Restrictions</SideHeading>
            <Box>
                <Item />
                <Item />
                <Item />
            </Box>
        </div>
    )
}

export default TFRs

const Box = styled.div`
    background: ${props => props.theme.surface};
    border-radius: 20px;
    box-shadow: ${props => props.theme.boxShadow};
    margin-bottom: 20px;
`
