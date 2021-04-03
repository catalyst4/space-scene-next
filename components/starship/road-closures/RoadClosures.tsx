import React from 'react'
import styled from 'styled-components'
import { Item } from './Item'
import { SideHeading } from '../../SideHeading'

const RoadClosures = () => {
    return (
        <div>
            <SideHeading>Road Closures</SideHeading>
            <Box>
                <Item />
                <Item />
                <Item />
            </Box>
        </div>
    )
}

export { RoadClosures }

const Box = styled.div`
    background: ${props => props.theme.surface};
    border-radius: 20px;
    box-shadow: ${props => props.theme.boxShadow};
    margin-bottom: 20px;
`
