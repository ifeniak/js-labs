
import { HeroWrapper, Image, ImageText, ItemLabel, ItemList, Label, TextWrapper, Button, InformWrapper, Inform, InformLabel, AllInform, InformText } from "./Home.styles";
import Hero from "../../icons/hero.jpg";
import GoldCreekPond from "../../icons/GoldCreekPond.jpg";
import AppenzellDistrict from "../../icons/AppenzellDistrict.jpg";
import Uttarakhand from "../../icons/Uttarakhand.jpg";
import { Item } from "../Item/Item";
import { VoucherItems } from "../VoucherItems/VoucherItems";

export const Home = () => {
    return (
        <div>
            <HeroWrapper>
                <TextWrapper>
                    <Label>Our Farms</Label>
                    <ImageText>The most based farms in Universe.<br/>Fulfil your dreams.</ImageText>
                </TextWrapper>
                <Image src={Hero} alt="image"></Image>
            </HeroWrapper>

            <ItemLabel>Propositions for you</ItemLabel>
            <ItemList>
                <Item model={GoldCreekPond} name={"Gold Creek Pond"}/>
                <Item model={AppenzellDistrict} name={"Appenzell District"}/>
                <Item model={Uttarakhand} name={"Uttarakhand"}/>
            </ItemList>
            
            <Button>View more</Button>

            <InformWrapper>
                <ItemLabel>About us</ItemLabel>
                <AllInform>
                    <Inform>
                        <InformLabel>100</InformLabel>
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

            <ItemLabel style={{marginTop:'200px'}}>Your latifundion</ItemLabel>
            <VoucherItems/>
        </div>
    );
}