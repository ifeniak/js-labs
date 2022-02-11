import { StyleHeader, Wrapper, Nav, NavItem, Logo, Links } from "./Header.styles";
import {
    InstagramOutlined,
    YoutubeOutlined,
    FacebookOutlined,
} from "@ant-design/icons";

export const Header = () => {
    return (
        <StyleHeader>
        <Wrapper>
            <Logo>Farm</Logo>
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>Catalog</NavItem>
                <NavItem>Cart</NavItem>
            </Nav>
            <Links>
                <InstagramOutlined style={{ margin: " 0 10px" }} />
                <YoutubeOutlined style={{ margin: "0 10px" }} />
                <FacebookOutlined style={{ margin: "0 10px" }} />
            </Links>
        </Wrapper>
    </StyleHeader>
    );
};