import Link from 'next/link'
import React from 'react'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Launches } from '../../components/manage/launches/Launches'
import { Vehicles } from '../../components/manage/vehicles/Vehicles'
import styled from 'styled-components'

const index = () => {
    return (
        <div>
            <Container>
                <Header>Dashboard</Header>
                <Link href="/manage/starship">Starship
                </Link>
                <FlexBetween>
                    <Launches />  
                    <Vehicles />  
                </FlexBetween>
            </Container> 
           
        </div>
    )
}

export default index

const FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
    & > div {
        width: 49%;
    }
`