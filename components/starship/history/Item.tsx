import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Item = ({ vehicle }) => {
    return (
        <Link href={`/starship/${vehicle.name}`}>
            <Border>
                <Box>
                    {vehicle.name}
                </Box>
            </Border>
        </Link>
    )
}

export { Item }

const Border = styled.div`
    background: ${props => props.theme.pinkGradient};
    padding: 1px;
    border-radius: 10px;
    cursor: pointer;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: ${props => props.theme.surface};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 2px;
`