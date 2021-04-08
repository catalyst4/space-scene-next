import styled from 'styled-components'

const FlexStart = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: ${props => props.mb && '15px'};
`

export { FlexStart }