import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components/Container'
import { FlightConditions } from '../../components/starship/flight-conditions/FlightConditions'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'
import { RoadClosures } from '../../components/starship/road-closures/RoadClosures'
import { History } from '../../components/starship/history/History'
import { Timeline } from '../../components/starship/updates/Timeline'
import TFRs from '../../components/starship/tfr/TFRs'

const starship = () => {
    return (
        <>
            <Head>
                <title>Starship | Space Scene</title>
            </Head>
            <Navbar />
            <Container>
                <Header>Starship</Header>
                <Layout>
                    <Main>
                        <Timeline />
                        <History />
                    </Main>
                    <Sidebar>
                        <FlightConditions />
                        <RoadClosures />
                        <TFRs />
                    </Sidebar>
                </Layout>
            </Container>
        </>
    )
}

export default starship

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Main = styled.div`
    width: 65%;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Sidebar = styled.div`
    width: 32%;
    @media (max-width: 768px) {
        width: 100%;
    }
`