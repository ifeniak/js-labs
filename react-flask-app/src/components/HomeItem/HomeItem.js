import {
    Image,
    Text, 
    Wrapper
} from "./HomeItem.styles";

export const HomeItem = ({name, image}) => {
    return (
        <Wrapper>
            <Image src={image}/>
            <Text>{name}</Text>
        </Wrapper>
    );
}