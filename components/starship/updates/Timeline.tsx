import React from 'react'
import styled from 'styled-components'
import { SubHeading } from '../../SubHeading'
import { Item } from './Item'
import { Skeleton } from './Skeleton'

interface Update {
    title: String,
    desc: String,
    timestamp: number,
    vehicle: Vehicle,
    _id: number
}

interface Vehicle {
    name: String,
}

interface Timeline {
    loading: Boolean,
    error: Boolean,
    data: Array<Update>,
    limit?: number
}

const Timeline = ({ loading, error, data, limit }: Timeline) => {

    return (
        <>
        <SubHeading mb>Updates</SubHeading>
        <Wrapper>
            {loading ? (
                <Skeleton />
            ) : error ? (
                <div>error</div>
            ) : (
                <>
                    {data.map((update, i) => {
                        if(!limit) {
                            return (
                                <Item 
                                    key={update._id}
                                    first={i === 0}
                                    last={i === data.length-1}
                                    update={update} 
                                />     
                            )
                        } else {
                            if(i < limit) {
                                return (
                                    <Item 
                                        key={update._id} 
                                        first={i === 0}
                                        last={i === limit-1}
                                        update={update} 
                                    />     
                                )    
                            }
                        }
                    })}
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