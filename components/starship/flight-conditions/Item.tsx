import React from 'react'
import styled from 'styled-components'
import { Indicator } from './Indicator'

const Item = ({ item }) => {

    return (
        <Box>
          <Indicator status={item.status} />
          <Text>{item.name}</Text>
        </Box>
    )
}

export { Item }

const Box = styled.div`
    padding: 13px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Text = styled.div`

`