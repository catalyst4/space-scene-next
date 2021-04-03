import React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'
import Link from 'next/link'

const Navbar = () => {
    return (
        <Wrapper>
            <Container>
                <Logo />
                <NavLinks>
                    <div>
                        <Link href="/starship">
                            <NavItem>Starship</NavItem>
                        </Link>
                    </div>
                    <div>
                        <Link href="/starlink">
                            <NavItem>Starlink</NavItem>
                        </Link>
                    </div>
                    <div>
                        <Link href="/launches">
                            <NavItem>Launches</NavItem>
                        </Link>
                    </div>
                    <div>
                        <Link href="/news">
                            <NavItem>News</NavItem>
                        </Link>
                    </div>
                </NavLinks>
            </Container>
        </Wrapper>
    )
}

export { Navbar }

const Wrapper = styled.div`
    width: 100%;
    padding: 15px;
    @media (max-width: 768px) {
        display: none;
    }
`

const Container = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const NavItem = styled.div`
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    margin-left: 30px;
    cursor: pointer;
`