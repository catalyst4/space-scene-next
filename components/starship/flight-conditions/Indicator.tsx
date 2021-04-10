import React from 'react'
import styled from 'styled-components'

const Indicator = ({ status, skeleton }) => {

    return (
        <Border status={status} skeleton={skeleton}>
            <Dot status={status} skeleton={skeleton} />
        </Border>
    )
}

export { Indicator }

const Border = styled.div`
    padding: 2px;
    border: 1px solid ${props => props.skeleton ? '#303030' : props.status ? 'green' : 'red'};
    border-radius: 99999px;
    margin-right: 25px;
`

const Dot = styled.div`
    width: 10px;
    height: 10px;
    background: ${props => props.skeleton ? '#303030' : props.status ? props.theme.greenGradient : props.theme.redGradient};
    border-radius: 99999px;
`