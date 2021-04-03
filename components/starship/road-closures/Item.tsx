import React from 'react'
import styled from 'styled-components'

const Item = () => {
    return (
        <Box>
            <Text>Testing Concluded. Hwy 4 and Boca Chica Beach are now open.</Text>
            <Flex>
                <Date>Friday, March 26</Date>
                <Time>7am - 7:30pm</Time>
            </Flex>
        </Box>
    )
}

export { Item }

const Box = styled.div`
    padding: 10px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
`

const Text = styled.div`
    font-size: 18px;
    margin-bottom: 5px;
`

const Flex = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Date = styled.span`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    margin-right: 15px;
    opacity: 0.5;
`

const Time = styled.span`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    opacity: 0.5;
`