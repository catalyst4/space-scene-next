import React from 'react'
import styled from 'styled-components'
import { Indicator } from './Indicator'

interface Item {
    status?: Boolean,
    children?: any,
    skeleton?: Boolean
}

const Item = ({ children, status, skeleton }: Item) => {

    return (
        <Box>
          <Indicator status={status} skeleton={skeleton} />
          {!skeleton ? <Text>{children}</Text> : <SkelText />}
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

const SkelText = styled.div`
    width: 100%;
    background: #303030;
    border-radius: 5px;
    height: 20px;
`