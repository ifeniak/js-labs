import { Image, Wrapper, Text } from "./Item.styles";

export const Item = (props) => {
    return (
        <Wrapper>
            <Image src={props.model}></Image>
            <Text>{props.name}</Text>
        </Wrapper>
    );
}