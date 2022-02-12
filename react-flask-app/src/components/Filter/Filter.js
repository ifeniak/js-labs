import { useState } from "react";
import { Logo, Nav, Search, NavItem, NavWrapper, Wrapper } from "../Header/Header.styles";
import { 
    ApplyButton, 
    FilterSelector, 
    FilterWrapper, 
    HorLine, 
    LabelText, 
    OuterWrapper
} from "./Filter.styles";
import SearchIcon from "../../icons/search.png";
import { Link } from "react-router-dom";


export function Filter(props) {
    const [name, changeName] = useState("null");
    const [order, changeOrder] = useState("0");
    const [price, changePrice] = useState("0");

    function handleName(nameSelector) {
        changeName(nameSelector.target.value);
    }

    function handleOrder(orderSelector) {
        changeOrder(orderSelector.target.value);
    }

    function handlePrice(priceSelector) {
        changePrice(priceSelector.target.value);
    }

    function updateItems() {
        const input = document.getElementById("search_input");
        props.function(name, order, price, input);
    }

    return (
        <>
            <Wrapper>
                <Logo>Voucher</Logo>
                <Nav>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                    <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                    <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
                </Nav>
                <NavWrapper>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Search id={"search_input"} placeholder={""}/>
                        <img src={SearchIcon} alt={"search"} style={{width: '20px', height: '20px', padding:'5px'}}/>
                    </div>
                </NavWrapper>
            </Wrapper>
            <HorLine/>
            <OuterWrapper>
                <FilterWrapper>
                    <LabelText>Sort by:</LabelText>
                    <FilterSelector id="name" onChange={handleName}>
                        <option value="null" selected>Choose filter</option>
                        <option value="price">Price</option>
                        <option value="name">Name</option>
                    </FilterSelector>
                    <LabelText>Order by:</LabelText>
                    <FilterSelector id="order" onChange={handleOrder}>
                        <option value="null" selected>Choose order</option>
                        <option value="1">Ascending</option>
                        <option value="2">Descending</option>
                    </FilterSelector>
                    <LabelText>Price:</LabelText>
                    <FilterSelector id="price" onChange={handlePrice}>
                        <option value="null" selected>Choose price</option>
                        <option value="1">&lt;1500</option>
                        <option value="2">&gt;1500</option>
                    </FilterSelector>
                </FilterWrapper>
                <ApplyButton onClick={updateItems}>Apply</ApplyButton>
            </OuterWrapper>
            <HorLine style={{marginTop: '10px'}}/>
        </>
    );
}