import React, { useState } from "react" ;
import styled from 'styled-components' ;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <NavStyled>
            <LogoStyled href="#">
                Solo<span>Codes</span>
            </LogoStyled>
            <HamburgerStyled onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerStyled>
            <MenuStyled  isOpen={isOpen}>
                <MenuLink href="#">Home</MenuLink>
                <MenuLink href="#">About</MenuLink>
                <MenuLink href="#">Blog</MenuLink>
                <MenuLink href="#">Contact</MenuLink>
            </MenuStyled>
        </NavStyled>
    )
}

export default Navbar


const NavStyled = styled.div `
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const LogoStyled = styled.a `
    padding: 1rem 0;
    color: #7b7fda;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;

    span {
    font-weight: 300;
    font-size: 1.3rem;
    }


`;

const HamburgerStyled = styled.div `
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #7b7fda;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
    display: flex;
}
`;

const MenuStyled = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        transition: max-height 0.3s ease-in;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    }
`;

const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #67bc98;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;
    &:hover {
    color: #7b7fda;
    }
`;
