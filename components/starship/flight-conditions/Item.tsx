import React from 'react'
import styled from 'styled-components'
import { Indicator } from './Indicator'

const Item = ({ children, status }) => {

    return (
        <Box>
          <Indicator status={status} />
          <Text>{children}</Text>
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