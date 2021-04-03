import React from 'react'
import styled from 'styled-components'

const Indicator = ({ status }) => {

    return (
        <Border status={status}>
            <Dot status={status} />
        </Border>
    )
}

export { Indicator }

const Border = styled.div`
    padding: 2px;
    border: 1px solid ${props => props.status === 1 ? 'green' : 'red'};
    border-radius: 99999px;
    margin-right: 25px;
`

const Dot = styled.div`
    width: 10px;
    height: 10px;
    background: ${props => props.status === 1 ? props.theme.greenGradient : props.theme.redGradient};
    border-radius: 99999px;
`