import React, { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getVehicles } from '../../../redux/actions/vehicleActions'
import { SideHeading } from '../../SideHeading'
import { Item } from './Item'

const FlightConditions = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVehicles())
    }, [])

    const { loading, error, data } = useSelector((state: RootStateOrAny) => state.vehicles)

    const vehicle = data[0]
    const fc = vehicle?.flightConditions


    return (
        <div>
            {loading ? (
                <div>loading</div>
            ) : error ? (
                <div>error</div>
            ) : (
                <>
                <SideHeading>{vehicle?.name} Flight Conditions</SideHeading>
                <Box>
                    <Item status={fc?.spaceXconfirmation}>SpaceX Confirmation</Item>
                    <Item status={fc?.marineHazardZone}>Marine Hazard Zone</Item>
                    <Item status={fc?.tfr}>Temp. Flight Restriction</Item>
                    <Item status={fc?.faaApproval}>FAA Approval</Item>
                    <Item status={fc?.roadClosure}>Road Closure</Item>
                    <Item status={fc?.staticFire}>Static Fire</Item>
                    <Item status={fc?.cyrogenicProof}>Cyrogenic Proof Test</Item>
                </Box>    
                </>
            )}
        </div>
    )
}

export { FlightConditions }

const Box = styled.div`
    background: ${props => props.theme.surface};
    border-radius: 20px;
    box-shadow: ${props => props.theme.boxShadow};
    margin-bottom: 20px;
`