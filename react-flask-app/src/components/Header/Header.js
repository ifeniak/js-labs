import { StyleHeader, Wrapper, Nav, NavItem, Logo, Links, Search, NavWrapper } from "./Header.styles";
import {
    InstagramOutlined,
    YoutubeOutlined,
    FacebookOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <Wrapper>
            <Logo>Voucher</Logo>
            <Nav>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
            </Nav>
            <NavWrapper>
                <Links>
                    <InstagramOutlined style={{margin: '10px'}}/>
                    <YoutubeOutlined style={{margin: '10px'}}/>
                    <FacebookOutlined style={{margin: '10px'}}/>
                </Links>
            </NavWrapper>
        </Wrapper>
    );
};