import Head from 'next/head'
import React from 'react'
import { Container } from '../../../components/Container'
import { Header } from '../../../components/Header'
import { Updates } from '../../../components/manage/starship/updates/Updates'
import { Navbar } from '../../../components/Navbar'
import styled from 'styled-components'
import { FlightConditions } from '../../../components/manage/starship/flight-conditions/FlightConditions'

const starship = () => {
    return (
        <>
            <Head>
                <title>Manage Starship | Space Scene</title>
            </Head>
            <Navbar />
            <Container>
                <Header>Manage Starship</Header>
                <Updates />
                <Layout>
                    <Left>
                        <FlightConditions />
                    </Left>
                    <Right>
                        <FlightConditions />
                    </Right>
                </Layout>
            </Container>
        </>
    )
}

export default starship

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    width: 49%;
`

const Right = styled.div`
    width: 49%;
`