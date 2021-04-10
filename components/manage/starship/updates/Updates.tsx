import React, { useEffect, useState } from 'react'
import { SubHeading } from '../../../SubHeading'
import { Table } from './Table'
import styled from 'styled-components'
import { Btn } from '../../../Btn'
import { Modal } from '../../../Modal'
import { TextField } from '../../../TextField'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { newUpdate } from '../../../../redux/actions/updateActions'
import { FlexEnd } from '../../../FlexEnd'
import { DateTime } from '../../../DateTime'
import { DropdownItem, Select } from '../../../Select'
import { getVehicles } from '../../../../redux/actions/vehicleActions'

const Updates = () => {

    const [open, setOpen] = useState<Boolean>(false)

    const closeHandler = () => {
        setOpen(false)
    }

    interface Vehicle {
        name: String,
        _id: String,
    }
    
    const [title, setTitle] = useState<string>(undefined)
    const [desc, setDesc] = useState<string>(undefined)
    const [vehicle, setVehicle] = useState<Vehicle>(undefined)
    const [timestamp, setTimestamp] = useState<number>(new Date().getTime())

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVehicles())
    }, [])

    const { loading, error, data } = useSelector((state: RootStateOrAny) => state.vehicles)

    const submitHandler = async () => {
        const vehicleId = vehicle._id
        dispatch(newUpdate({ title, desc, vehicleId, timestamp }))
        closeHandler()
        setTitle(undefined)
        setDesc(undefined)
    }

    return (
        <>
            <Flex>
                <SubHeading>Updates</SubHeading>
                <Btn padding="4px 10px" onClick={() => setOpen(true)}>+ Add</Btn>
            </Flex>
            <Table />
            {open && (
                <Modal open={open} onClose={() => closeHandler()}>
                    {loading ? (
                        <div>loading</div>
                    ) : error ? (
                        <div>error</div>
                    ) : (
                        <>
                            <TextField
                                value={title}
                                placeholder="Title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <TextField
                                value={desc}
                                placeholder="Description"
                                onChange={(e) => setDesc(e.target.value)}
                                textarea
                            />
                            <div style={{marginBottom: '15px'}}>
                                <Select 
                                    value={vehicle?.name}
                                    placeholder="Serial Number"
                                >
                                    {data.map((vehicle, i) => (
                                        <DropdownItem key={i} onClick={() => setVehicle(vehicle)}>{vehicle.name}</DropdownItem>
                                    ))}
                                </Select>    
                            </div>
                            <DateTime timestamp={timestamp} updateTimestamp={(ts) => setTimestamp(ts)} />
                            <FlexEnd>
                                <Btn padding="8px 15px" onClick={() => submitHandler()}>Add Update</Btn>
                            </FlexEnd>
                        </>
                    )}
                </Modal>
            )}
        </>
    )
}

export { Updates }

const Flex = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
`