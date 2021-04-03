import Link from 'next/link'
import React from 'react'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Vehicles } from '../../components/manage/vehicles/Vehicles'

const index = () => {
    return (
        <div>
            <Container>
                <Header>Dashboard</Header>
                <Link href="/manage/starship">Starship
                </Link>
                <Vehicles />  
            </Container> 
           
        </div>
    )
}

export default index
