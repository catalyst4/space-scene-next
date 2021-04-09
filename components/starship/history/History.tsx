import React, { useEffect } from 'react'
import { SubHeading } from '../../SubHeading'
import styled from 'styled-components'
import { Item } from './Item'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getVehicles } from '../../../redux/actions/vehicleActions'

const History = () => {

    const dispatch = useDispatch()

    const { loading, error, data } = useSelector((state: RootStateOrAny) => state.vehicles)

    useEffect(() => {
        if(data.length === 0) {
            dispatch(getVehicles())    
        }
    }, [])

    return (
        <>
            <SubHeading mb>Starship History</SubHeading>
            {loading ? (
                <div>loading</div>
            ) : error ? (
                <div>error</div>
            ) : (
                <Grid>
                    {data
                        .filter(vehicle => vehicle.name.startsWith('SN') || vehicle.name.startsWith('BN'))
                        .map(vehicle => (
                            <Item key={vehicle._id} vehicle={vehicle} />
                        ))
                        .reverse()
                    }
                </Grid>    
            )}
        </>
    )
}

export { History }

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
    margin-bottom: 20px;
`