import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 100px 200px;
`

export const Image = styled.img`
    width: 500px;
    height: 400px;
    border-radius: 15px;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 30px;
`

export const Label = styled.h2`
    font-weight: 500;
    font-size: 68px;
    margin: 0;
`

export const Text = styled.h4`
    font-weight: 300;
    font-size: 32px;
`

export const Price = styled.h4`
    font-weight: 400;
    font-size: 32px;
    align-self: end;
`

export const Button = styled.button`
    margin-top: 30px;
    padding: 18px 32px;
    background-color: #f3f3f3;
    border: none;
    border-radius: 10px;
    width: 50%;
    align-self: center;
    &:hover {
        box-shadow: 0 0 8px #777676;
    }
`