import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getVehicles } from '../../../redux/actions/vehicleActions'
import { Row } from './Row'

const Table = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVehicles())
    }, [dispatch])

    const { loading, error, data } = useSelector((state: RootStateOrAny) => state.vehicles)

    return (
        <Wrapper>
            {loading ? (
                <div>loading</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : (
                <>
                    {data.map((vehicle) => (
                        <Row key={vehicle._id} vehicle={vehicle} />
                    )).reverse()}
                </>
            )}
        </Wrapper>
    )
}

export { Table }

const Wrapper = styled.div`
    width: 100%;
    background: ${props => props.theme.surface};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: 20px;
    margin-bottom: 20px;
    overflow: hidden;
`