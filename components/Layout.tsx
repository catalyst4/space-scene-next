import styled from 'styled-components'

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Main = styled.div`
    width: 65%;
    @media (max-width: 768px) {
        width: 100%;
    }
`

const Sidebar = styled.div`
    width: 32%;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export { Layout, Main, Sidebar }