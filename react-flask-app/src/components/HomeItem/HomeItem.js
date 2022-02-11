import {
    Image,
    Text, 
    Wrapper
} from "./HomeItem.styles";

export const HomeItem = ({name, country}) => {
    return (
        <Wrapper>
            <Image src={country}/>
            <Text>{name}</Text>
        </Wrapper>
    );
}

