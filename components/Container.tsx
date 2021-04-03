import styled from 'styled-components'

const Container = styled.div`
    width: 70%;
    margin: auto;
    padding-top: 50px;
    @media (max-width: 768px) {
        width: 92%;
        padding-top: 30px;
    }
`

export { Container }