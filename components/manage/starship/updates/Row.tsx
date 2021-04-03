import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { deleteUpdate, editUpdate } from '../../../../redux/actions/updateActions'
import { Btn } from '../../../Btn'
import { TextField } from '../../../TextField'

const Row = ({ update }) => {

    const [open, setOpen] = useState<Boolean>(false)

    const toggleOpen = () => {
        setOpen(!open)
    }

    const id = update._id
    const [title, setTitle] = useState<string>(update.title)
    const [serialNumber, setSerialNumber] = useState<string>(update.serialNumber)
    const [dateFormatted, setDateFormatted] = useState<string>()

    const date = new Date(update.timestamp)

    const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday']

    const months = [ 'January', 'February', 'March', 'April','May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December' ]

    useEffect(() => {
        setDateFormatted(days[date.getDay() - 1] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ' • ' + date.getHours() + ':' + date.getMinutes())
    })

    const dispatch = useDispatch()

    const saveHandler = () => {
        dispatch(editUpdate({ title, serialNumber, id }))
        toggleOpen()
    }

    const removeHandler = () => {
        dispatch(deleteUpdate(id))
    }

    return (
        <Item>
            <Header onClick={toggleOpen}>
                <Heading>{update.title}</Heading>
                <SerialNumber>{update.serialNumber}</SerialNumber>
                <DateTime>{dateFormatted}</DateTime>
                {!open ? 
                    (<Expand src="/expand.svg" />) : 
                    (<Expand open src="/expand.svg" />)
                }
            </Header>
            {open && (
            <Expanded>
                <TextField 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField 
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
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
`