import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row } from './Row'
import axios from 'axios'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getLaunches } from '../../../redux/actions/launchActions'

const Table = () => {

    interface Update {
        title: String,
        serialNumber: String,
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLaunches())
    }, [dispatch])

    const { loading, error, data } = useSelector((state: RootStateOrAny) => state.launches)

    return (
        <Wrapper>
            {loading ? (
                <div>loading</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : (
                <>
                    {data.map((launch) => (
                        <Row key={launch._id} launch={launch} />
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