import React, { useEffect, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteUpdate, editUpdate } from '../../../../redux/actions/updateActions'
import { Btn } from '../../../Btn'
import { TextField } from '../../../TextField'
import { DateTime as DateTimeInput } from '../../../DateTime'
import { DropdownItem, Select } from '../../../Select'
import { dateFormatter } from '../../../../util/date'

const Row = ({ update }) => {

    const [open, setOpen] = useState<Boolean>(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    interface Vehicle {
        name: String,
        _id: String,
    }

    const id = update._id
    const [title, setTitle] = useState<string>(update.title)
    const [desc, setDesc] = useState<string>(update.desc)
    const [vehicle, setVehicle] = useState<Vehicle>(update.vehicle)
    const [timestamp, setTimestamp] = useState<number>(update.timestamp)

    const date = dateFormatter(timestamp)

    const dispatch = useDispatch()

    const { loading, error, data } = useSelector((state: RootStateOrAny) => state.vehicles)

    const saveHandler = () => {
        const vehicleId = vehicle._id
        dispatch(editUpdate({ title, desc, vehicleId, timestamp }, id))
        toggleOpen()
    }

    const removeHandler = () => {
        dispatch(deleteUpdate(id))
    }

    return (
        <Item>
            <Header onClick={toggleOpen}>
                <Heading>{title}</Heading>
                <SerialNumber>{vehicle.name}</SerialNumber>
                <DateTime>{date}</DateTime>
                {!open ? 
                    (<Expand src="/expand.svg" />) : 
                    (<Expand open src="/expand.svg" />)
                }
            </Header>
            {open && (
            <Expanded>
                <TextField 
                    alternative
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    alternative
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
                        {loading ? (
                            <div>loading</div>
                        ) : error ? (
                            <div>error</div>
                        ) : (
                            <>
                                {data.map((vehicle, i) => (
                                    <DropdownItem key={i} onClick={() => setVehicle(vehicle)}>{vehicle.name}</DropdownItem>
                                ))}
                            </>
                        )}
                    </Select>    
                </div>
                <DateTimeInput timestamp={timestamp} updateTimestamp={setTimestamp} />
                <FlexEnd>
                    <FlexStart>
                        <Btn onClick={saveHandler} padding="10px 20px">Save</Btn>
                        <Remove onClick={removeHandler} src="/remove.svg" />
                    </FlexStart>
                </FlexEnd>
            </Expanded>    
            )}
        </Item>
    )
}

export { Row }

const Item = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.5);
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 15px 20px;
`

const Heading = styled.div`
    width: 40%;
`

const SerialNumber = styled.div`
    width: 20%;
    text-transform: uppercase;
    font-weight: 500;
    opacity: 0.5;
`

const DateTime = styled.div`
    width: 50%;
    text-transform: uppercase;
    font-weight: 500;
    opacity: 0.5;
`

const Expand = styled.img`
    transform: ${props => props.open && 'rotate(180deg)'};
    width: 25px;
`

const Expanded = styled.div`
    width: 100%;
    padding: 25px;
    background: #202020;
`

const FlexEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const FlexStart = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Remove = styled.img`
    margin-left: 10px;
    opacity: 0.25;
    cursor: pointer;
`