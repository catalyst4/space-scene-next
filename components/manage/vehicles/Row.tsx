import React, { useEffect, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteLaunch, editLaunch } from '../../../redux/actions/launchActions'
import { deleteVehicle, editVehicle } from '../../../redux/actions/vehicleActions'
import { Btn } from '../../Btn'
import { Select } from '../../Select'
import { TextField } from '../../TextField'

const Row = ({ vehicle }) => {

    const [open, setOpen] = useState<Boolean>(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    interface Vehicle {
        name: String,
        _id: String,
    }

    const id = vehicle._id
    const [name, setName] = useState<string>(vehicle.name)
    const [series, setSeries] = useState<string>(vehicle.series)

    const dispatch = useDispatch()

    const { loading, error, data } = useSelector((state: RootStateOrAny) => state.launches)

    const saveHandler = () => {
        const vehicleId = vehicle._id
        dispatch(editVehicle({ name, vehicle }, id))
        toggleOpen()
    }

    const removeHandler = () => {
        dispatch(deleteVehicle(id))
    }

    return (
        <Item>
            <Header onClick={toggleOpen}>
                <Heading>{series} {name}</Heading>
                {!open ? 
                    (<Expand src="/expand.svg" />) : 
                    (<Expand open src="/expand.svg" />)
                }
            </Header>
            {open && (
            <Expanded>
                <TextField 
                    alternative
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
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