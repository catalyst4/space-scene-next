import React from 'react'
import styled from 'styled-components'
import { Item } from './Item'

const Skeleton = () => {
    return (
        <>
            <SideHeading />
            <Box>
                <Item skeleton />
                <Item skeleton />
                <Item skeleton />
                <Item skeleton />
                <Item skeleton />
                <Item skeleton />
                <Item skeleton />
            </Box>
        </>
    )
}

export { Skeleton }

const SideHeading = styled.div`
    width: 80%;
    background: #303030;
    height: 25px;
    margin-bottom: 15px;
    border-radius: 5px;
`

const Box = styled.div`
    background: ${props => props.theme.surface};
    border-radius: 20px;
    box-shadow: ${props => props.theme.boxShadow};
    margin-bottom: 20px;
`