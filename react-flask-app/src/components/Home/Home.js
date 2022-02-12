import { HeroWrapper, Image, ImageText, ItemLabel, ItemList, Label, TextWrapper, Button, InformWrapper, Inform, InformLabel, AllInform, InformText } from "./Home.styles";
import Hero from "../../icons/hero.jpg";
import GoldCreekPond from "../../icons/GoldCreekPond.jpg";
import AppenzellDistrict from "../../icons/AppenzellDistrict.jpg";
import Uttarakhand from "../../icons/Uttarakhand.jpg";
import { VoucherItems } from "../VoucherItems/VoucherItems";
import { useState } from "react";
import { HomeItem } from "../HomeItem/HomeItem";

export const Home = () => {
    const [viewMoreVouchers, toggle] = useState(false);
    const [vouchers, showAllVouchers] = useState([
        {
            name: "Gold Creek Pond",
            image: GoldCreekPond,

        },
        {
            name: "Appenzell District",
            image: AppenzellDistrict,
        },
        {
            name: "Uttarakhand",
            image: Uttarakhand,
        }
    ]);

    function changeVouchers() {
        if (!viewMoreVouchers) {
            showAllVouchers(vouchers.concat(vouchers));
        } else {
            showAllVouchers(vouchers.slice(0, 3));
        }
    }

    function toggleView() {
        toggle(!viewMoreVouchers);
        changeVouchers();
    }

    return (
        <div>
            <HeroWrapper>
                <TextWrapper>
                    <Label>Travel vouchers</Label>
                    <ImageText>Your guide to adventures. <br/> Come fly with us into a fantasy</ImageText>
                </TextWrapper>
                <Image src={Hero} alt="tourists image"></Image>
            </HeroWrapper>

            <ItemLabel>Propositions for you</ItemLabel>
            <ItemList>
                {vouchers.map(voucher => (<HomeItem key={voucher.name.toString()} name = {voucher.name} image={voucher.image}/>))}
            </ItemList>
            
            <Button onClick={toggleView}>View more</Button>

            <InformWrapper>
                <ItemLabel>About us</ItemLabel>
                <AllInform>
                    <Inform>
                        <InformLabel>500</InformLabel>
                        <InformText>countries</InformText>
                    </Inform>
                    <Inform>
                        <InformLabel>2000</InformLabel>
                        <InformText>places</InformText>
                    </Inform>
                    <Inform>
                        <InformLabel>5000</InformLabel>
                        <InformText>feedbacks</InformText>
                    </Inform>
                </AllInform>
            </InformWrapper>

            <ItemLabel style={{marginTop:'200px'}}>Your trip</ItemLabel>
            <VoucherItems/>
        </div>
    );
}