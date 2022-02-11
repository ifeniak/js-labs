import { 
    ApplyButton, 
    FilterSelector, 
    FilterWrapper, 
    HorLine, 
    LabelText, 
    Wrapper 
} from "./Filter.styles";


export const Filter = () => {
    return (
        <div>
            <HorLine/>
            <Wrapper>
                <FilterWrapper>
                    <LabelText>Sort by:</LabelText>
                    <FilterSelector>
                        <option selected>Choose filter:</option>
                        <option value="Somethong">Price</option>
                        <option value="Something">Country</option>
                    </FilterSelector>
                    <LabelText>Order by:</LabelText>
                    <FilterSelector>
                        <option selected>Choose order:</option>
                        <option value="Something">Ascending</option>
                        <option value="Something">Descending</option>
                    </FilterSelector>
                    <LabelText>Price:</LabelText>
                    <FilterSelector>
                        <option selected>Choose price:</option>
                        <option value="Something">&lt;1000</option>
                        <option value="Something">1000-3000</option>
                        <option value="Something">&gt;3000</option>
                    </FilterSelector>
                </FilterWrapper>
                <ApplyButton>Apply</ApplyButton>
            </Wrapper>
            <HorLine style={{marginTop: '10px'}}/>
        </div>
    );
}