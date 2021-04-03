import React from 'react'
import styled from 'styled-components'
import { Indicator } from '../../../starship/flight-conditions/Indicator'

const Item = () => {
    return (
        <Box>
            <Indicator status={1} />
            <Text>Static Fire Complete</Text>
        </Box>
    )
}

export { Item }

const Box = styled.div`
    padding: 13px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Text = styled.div`

`