import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Wrapper } from "./Catalog.styles";
import GoldCreekPond from "../../icons/GoldCreekPond.jpg";
import AppenzellDistrict from "../../icons/AppenzellDistrict.jpg";
import Uttarakhand from "../../icons/Uttarakhand.jpg";
import Algeria from "../../icons/Algeria.jpg";
import { useState } from "react";
import { Filter } from "../Filter/Filter";
import { ItemPage } from "../ItemPage/ItemPage";

export const Catalog = () => {
    const catalogItems = [
        {
            name: "Gold Creek Pond",
            price: 1200,
            image: GoldCreekPond
        },
        {
            name: "Appenzell District",
            price: 700,
            image: AppenzellDistrict
        },
        {
            name: "Uttarakhand",
            price: 890,
            image: Uttarakhand
        },
        {
            name: "Algeria",
            price: 2500,
            image: Algeria
        }
    ];
    const [items, update] = useState(catalogItems);

    function updateItems(name, order, price, input) {
        let resultArray = catalogItems;
        if (price == 1)
            resultArray = catalogItems.filter(item => item.price <= 1500);
        else if (price == 2)
            resultArray = catalogItems.filter(item => item.price > 1500);
        if (name == "name")
            resultArray.sort((a, b) => a.name.localeCompare(b.name));
        else if (name == "price")
            resultArray.sort((a, b) => a.price - b.price)
        sortByOrder(resultArray, order, input);
    }

    function sortByOrder(array, order, input) {
        let resultArray;
        if (order == 2) 
            resultArray = Array.from(array).reverse();
        else
            resultArray = Array.from(array);
        filterInput(resultArray, input);
    }

    function filterInput(array, input) {
        update(array.filter(item  => item.name.search(input.value) !== -1));
    }

    

    return (
        <>
            <Filter function={updateItems}/>
            <Wrapper>
                {items.map(item => 
                <CatalogItem key={item.name.toString()} name={item.name} price={item.price} image={item.image}/>)}
            </Wrapper>
        </>
    );
}