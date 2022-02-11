import { StyleHeader, Wrapper, Nav, NavItem, Logo, Links, Search, NavWrapper } from "./Header.styles";
import {
    InstagramOutlined,
    YoutubeOutlined,
    FacebookOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import SearchIcon from "../../icons/search.png";

export const Header = (props) => {
    return (
        <StyleHeader>
        <Wrapper>
            <Logo>Voucher</Logo>
            <Nav>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
            </Nav>
            <NavWrapper>
                {check(props.isHomePage)}
            </NavWrapper>
        </Wrapper>
    </StyleHeader>
    );
};

const check = (isHomePage) => {
    if (isHomePage) {
        return <Links>
            <InstagramOutlined style={{margin: '10px'}}/>
            <YoutubeOutlined style={{margin: '10px'}}/>
            <FacebookOutlined style={{margin: '10px'}}/>
        </Links>
    }
    return <div style={{display: 'flex', alignItems: 'center'}}>
        <Search id={"search_button"}/>
        <img src={SearchIcon} alt={"search"} style={{width: '20px', height: '20px', padding:'5px'}}/>
    </div>
}