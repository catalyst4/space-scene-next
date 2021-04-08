import styled from 'styled-components'

const SubHeading = styled.h3`
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: ${props => props.mb && '15px'}
`

export { SubHeading }