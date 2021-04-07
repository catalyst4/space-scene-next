import Link from 'next/link'
import React from 'react'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Launches } from '../../components/manage/launches/Launches'
import { Vehicles } from '../../components/manage/vehicles/Vehicles'

const index = () => {
    return (
        <div>
            <Container>
                <Header>Dashboard</Header>
                <Link href="/manage/starship">Starship
                </Link>
                <Vehicles />
                <Launches />
            </Container> 
           
        </div>
    )
}

export default index
