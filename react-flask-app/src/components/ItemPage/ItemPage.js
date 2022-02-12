import {Image, Label, Text, TextWrapper, Wrapper, Price, Button} from "./ItemPage.styles";

export function ItemPage(item) {
    return (
        <>
            <Wrapper>
                <Image src={item.item.image}/>
                <TextWrapper>
                    <Label>{item.item.name}</Label>
                    <Text>{item.item.text}</Text>
                    <Price>Price: {item.item.price}</Price>
                    <Button onClick={() => item.item.function(null)}>Go back</Button>
                </TextWrapper>
            </Wrapper>
        </>
    )
}