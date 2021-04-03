import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row } from './Row'
import axios from 'axios'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getUpdates } from '../../../../redux/actions/updateActions'

const Table = () => {

    interface Update {
        title: String,
        serialNumber: String,
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUpdates())
    }, [dispatch])

    const { loading, error, data } = useSelector((state: RootStateOrAny) => state.updates)

    return (
        <Wrapper>
            {loading ? (
                <div>loading</div>
            ) : error ? (
                <div>{error.message}</div>
            ) : (
                <>
                    {data.map((update) => (
                        <Row key={update._id} update={update} />
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