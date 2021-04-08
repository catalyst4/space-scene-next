import React, { useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Head from 'next/head'
import { Navbar } from '../../components/Navbar'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Layout, Main, Sidebar } from '../../components/Layout'
import { Timeline } from '../../components/starship/updates/Timeline'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getVehicles } from '../../redux/actions/vehicleActions'

export async function getServerSideProps(context) {

    const { name } = context.params
    
    let { data: { vehicle, error }} = await axios.get(`http://localhost:5000/api/v1/vehicle/${name}`)

    if(!vehicle) {
        return {
            redirect: {
                destination: '/starship',
                permanent: false,
            },
        }
    }

    return {
        props: { vehicle }
    }

}

const vehicle = ({ vehicle }) => {

    return (
        <>
            <Head>
                <title>Starship {vehicle.name} | Space Scene</title>
            </Head>
            <Navbar />
            <Container>
                <Header>Starship {vehicle.name}</Header>
                <Layout>
                    <Main>
                        <Timeline loading={false} error={false} data={vehicle.updates} />
                    </Main>
                    <Sidebar>

                    </Sidebar>
                </Layout>
            </Container>
        </>
    )
}

export default vehicle