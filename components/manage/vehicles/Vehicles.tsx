import React, { useEffect, useState } from 'react'
import { SubHeading } from '../../SubHeading'
import { Btn } from '../../Btn'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getVehicles, newVehicle } from '../../../redux/actions/vehicleActions'
import { FlexStart } from '../../FlexStart'
import { Modal } from '../../Modal'
import { TextField } from '../../TextField'
import { FlexEnd } from '../../FlexEnd'
import { Table } from './Table'

const Vehicles = () => {

    const [open, setOpen] = useState<Boolean>(false)

    const closeHandler = () => {
        setOpen(false)
    }

    const [name, setName] = useState<string>(undefined)
    const [series, setSeries] = useState<string>(undefined)
    const [manufacturer, setManufacturer] = useState<string>(undefined)

    const dispatch = useDispatch()

    const submitHandler = () => {
        dispatch(newVehicle({ name, series, manufacturer }))
        closeHandler()
        setName(undefined)
        setSeries(undefined)
        setManufacturer(undefined)
    }

    return (
        <div>
            <FlexStart mb>
                <SubHeading>Vehicles</SubHeading>
                <Btn padding="4px 10px" onClick={() => setOpen(true)}>+ Add</Btn>
            </FlexStart>
            <Table />
            {open && (
                <Modal open={open} onClose={() => closeHandler()}>
                    <TextField
                        value={name}
                        placeholder="Vehicle Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        value={series}
                        placeholder="Vehicle Series"
                        onChange={(e) => setSeries(e.target.value)}
                    />
                    <TextField
                        value={manufacturer}
                        placeholder="Vehicle Manufacturer"
                        onChange={(e) => setManufacturer(e.target.value)}
                    />
                    <FlexEnd>
                        <Btn padding="8px 15px" onClick={() => submitHandler()}>Add Vehicle</Btn>
                    </FlexEnd>
                </Modal>
            )}
        </div>
    )
}

export { Vehicles }
