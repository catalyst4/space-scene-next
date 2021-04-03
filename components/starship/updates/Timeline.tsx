import React, { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getUpdates } from '../../../redux/actions/updateActions'
import { SubHeading } from '../../SubHeading'
import { Item } from './Item'

const Timeline = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUpdates())
    }, [])

    const { loading, error, data } = useSelector((state: RootStateOrAny) => state.updates)

    return (
        <>
        <SubHeading>SN11 Updates</SubHeading>
        <Wrapper>
            {loading ? (
                <div>loading</div>
            ) : error ? (
                <div>error</div>
            ) : (
                <>
                    {data.map((update, i) => {
                        return (
                        <Item 
                            key={update._id} 
                            last={i === 0}
                            next={i === data.length-1 }
                            update={update} 
                        />
                    )}).reverse()}
                </>
            )}
        </Wrapper>
        </>
    )
}

export { Timeline }

const Wrapper = styled.div`
    width: 100%;
    @media (max-width: 768px) {
        width: calc(100% - 30px);
        margin-left: auto;
    }
`