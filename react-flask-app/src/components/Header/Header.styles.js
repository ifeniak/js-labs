import styled from 'styled-components';

export const StyleHeader = styled.div`
    padding: 16px 20px 4px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 18px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    background-color: #f3f0f0e7;
    width: 100%;
`

export const Logo = styled.a`
    color: black;
    text-decoration: none;
    padding-left: 50px;
`

export const Nav = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0;
    text-align: center;
    flex: 5;
`
export const NavItem = styled.li`
    margin: 10px 30px; 
    text-align: center; 
`

export const Links = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0;
`
export const NavWrapper = styled.div`
    width: 200px;
    flex: 1;
`

export const Search = styled.input`
    border-color: #c4c4c4;
    border-style: solid;
    border-radius: 10px;
    color: #c4c4c4;
    padding: 8px 8px;
    margin: 0;
`