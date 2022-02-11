import { CatalogItem } from "../CatalogItem/CatalogItem";
import { Wrapper } from "./Catalog.styles";
import GoldCreekPond from "../../icons/GoldCreekPond.jpg";
import AppenzellDistrict from "../../icons/AppenzellDistrict.jpg";
import Uttarakhand from "../../icons/Uttarakhand.jpg";
import Algeria from "../../icons/Algeria.jpg";


let items = [
    {
        name: "Gold Creek Pond",
        price: 1200,
        country: "USA",
        image: GoldCreekPond
    },
    {
        name: "Appenzell District",
        price: 700,
        country: "Switzerland",
        image: AppenzellDistrict
    },
    {
        name: "Uttarakhand",
        price: 890,
        country: "India",
        image: Uttarakhand
    },
    {
        name: "Algeria",
        price: 2500,
        country: "Algeria",
        image: Algeria
    },
]

export const Catalog = () => {
    return (
        <Wrapper>
            {
                items.map(item => (
                    <CatalogItem name={item.name} country={item.country} price={item.price}  image={item.image}/>))
            }
        </Wrapper>
    );
}