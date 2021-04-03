import React, { useState } from 'react'
import { SubHeading } from '../../../SubHeading'
import { Table } from './Table'
import styled from 'styled-components'
import { Btn } from '../../../Btn'
import { Modal } from '../../../Modal'
import { TextField } from '../../../TextField'
import { useDispatch } from 'react-redux'
import { newUpdate } from '../../../../redux/actions/updateActions'
import { FlexEnd } from '../../../FlexEnd'
import { DateTime } from '../../../DateTime'

const Updates = () => {

    const [open, setOpen] = useState<Boolean>(false)

    const closeHandler = () => {
        setOpen(false)
    }
    
    const [title, setTitle] = useState<string>(undefined)
    const [serialNumber, setSerialNumber] = useState<string>(undefined)
    const [timestamp, setTimestamp] = useState<number>(new Date().getTime())

    const dispatch = useDispatch()

    const submitHandler = async () => {
        dispatch(newUpdate({ title, serialNumber, timestamp }))
        closeHandler()
        setTitle(undefined)
        setSerialNumber(undefined)
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
                    <TextField
                        value={title}
                        placeholder="Update Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        value={serialNumber}
                        placeholder="Serial Number"
                        onChange={(e) => setSerialNumber(e.target.value)}
                    />
                    <DateTime timestamp={timestamp} updateTimestamp={(ts) => setTimestamp(ts)} />
                    <FlexEnd>
                        <Btn padding="8px 15px" onClick={() => submitHandler()}>Add Update</Btn>
                    </FlexEnd>
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