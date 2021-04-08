import Head from 'next/head'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '../../components/Container'
import { FlightConditions } from '../../components/starship/flight-conditions/FlightConditions'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'
import { RoadClosures } from '../../components/starship/road-closures/RoadClosures'
import { History } from '../../components/starship/history/History'
import { Timeline } from '../../components/starship/updates/Timeline'
import TFRs from '../../components/starship/tfr/TFRs'
import { getUpdates } from '../../redux/actions/updateActions'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { Layout, Main, Sidebar } from '../../components/Layout'

const starship = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUpdates())
    }, [])

    const { loading, error, data } = useSelector((state: RootStateOrAny) => state.updates)

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
                        <Timeline limit={3} loading={loading} error={error} data={data} />
                        <History />
                    </Main>
                    <Sidebar>
                        <RoadClosures />
                        <TFRs />
                    </Sidebar>
                </Layout>
            </Container>
        </>
    )
}

export default starship