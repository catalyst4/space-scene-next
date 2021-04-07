import React, { useEffect, useState } from 'react'
import { SubHeading } from '../../SubHeading'
import { Btn } from '../../Btn'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { FlexStart } from '../../FlexStart'
import { Modal } from '../../Modal'
import { TextField } from '../../TextField'
import { FlexEnd } from '../../FlexEnd'
import { newLaunch, getLaunches } from '../../../redux/actions/launchActions'
import { Select } from '../../Select'
import { getVehicles } from '../../../redux/actions/vehicleActions'
import styled from 'styled-components'

const Launches = () => {

    const [open, setOpen] = useState<Boolean>(false)

    const closeHandler = () => {
        setOpen(false)
    }

    interface Vehicle {
        name: String,
        _id: String
    }

    const [name, setName] = useState<string>(undefined)
    const [vehicle, setVehicle] = useState<Vehicle>()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLaunches())
        dispatch(getVehicles())
    }, [])

    const launches = useSelector((state: RootStateOrAny) => state.launches)
    const vehicles = useSelector((state: RootStateOrAny) => state.vehicles)

    const submitHandler = () => {
        const vehicleId = vehicle._id
        dispatch(newLaunch({ name, vehicleId }))
        closeHandler()
        setName(undefined)
    }

    return (
        <div>
            <FlexStart>
                <SubHeading>Launches</SubHeading>
                <Btn padding="4px 10px" onClick={() => setOpen(true)}>+ Add</Btn>
            </FlexStart>
            {launches.loading ? (
                <div>loading</div>
            ) : launches.error ? (
                <div>error</div>
            ) : (
                <>
                    {launches.data.map((launch, i) => (
                        <div key={i}>{launch.name} / {launch.vehicle.name}</div>
                    )).reverse()}
                </>
            )}
            {open && (
                <Modal open={open} onClose={() => closeHandler()}>
                    <TextField
                        value={name}
                        placeholder="Launch Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Select
                        value={vehicle?.name}
                        placeholder="Serial Number"
                    >
                        {vehicles.data.map((vehicle, i) => (
                            <Item key={i} onClick={() => setVehicle(vehicle)}>{vehicle.name}</Item>
                        )).reverse()}
                    </Select>
                    <FlexEnd>
                        <Btn padding="8px 15px" onClick={() => submitHandler()}>Add Vehicle</Btn>
                    </FlexEnd>
                </Modal>
            )}
        </div>
    )
}

export { Launches }

const Item = styled.div`
    padding: 8px 20px;
    cursor: pointer;
`