import React from 'react'
import styled from 'styled-components'

const Skeleton = () => {

    const skeleton = [1,2,3]

    return (
        <>
            {skeleton.map((item, i) => (
                <Wrapper key={i} first={i === 0} last={i === 2}>
                    <Border>
                        <Box>
                            <Vehicle /> 
                            <Heading />
                            <Desc />
                            <Desc />
                            <DateTime />
                        </Box>
                    </Border>    
                </Wrapper>    
            ))}
        </>
    )
}

export { Skeleton }

const Wrapper = styled.div`
    position: relative;
    padding-bottom: 20px;
    &::before {
        content: '';
        width: 15px;
        height: 15px;
        position: absolute;
        top: calc(50% - 12px);
        left: -50px;
        background: #121212;
        border: 7px solid ${props => props.theme.timeline};
        border-radius: 99999px;
        z-index: 99999;
        @media (max-width: 768px) {
            width: 10px;
            height: 10px;
            left: -32px;
            border: 5px solid ${props => props.theme.timeline};
        }
    }
    &::after {
        &:last-child {
            background: red;
        }
        content: '';
        width: 7px;
        height: ${props => props.last ? '100%' : '100%'};
        position: absolute;
        top: ${props => props.first ? '50%' : '0%'};
        left: -39px;
        background: ${props => props.last ? `linear-gradient(to top, rgba(0,0,0,0), ${props.theme.timeline} 50%)` : props.theme.timeline};
        @media (max-width: 768px) {
            width: 5px;
            left: -24px;
            top: ${props => props.first ? '50%' : '0%'};
        }
    }
`

const Border = styled.div`
    padding: 2px;
    background: ${props => props.theme.pinkGradient};
    border-radius: 20px;
    box-shadow: ${props => props.theme.boxShadow};
`

const Box = styled.div`
    padding: 20px;
    border-radius: 20px;
    background: ${props => props.theme.surface};
    position: relative;
    @media (max-width: 768px) {
        padding: 15px 20px;
    }
`

const Vehicle = styled.div`
    width: 100px;
    background: #303030;
    border-radius: 5px;
    height: 25px;
    margin-bottom: 15px;
`

const Heading = styled.h3`
    width: 70%;
    background: #303030;
    border-radius: 5px;
    height: 50px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`

const Desc = styled.p`
    width: 90%;
    background: #303030;
    border-radius: 5px;
    height: 20px;
    margin-bottom: 8px;
`

const DateTime = styled.div`
    width: 40%;
    background: #303030;
    border-radius: 5px;
    height: 20px;
`