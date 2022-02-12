import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f3f3f3;
    border-radius: 25px;
    padding: 10px;
    text-align: center;
    margin: 10px;
`

export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    flex-direction: column;
`

export const Image = styled.img`
    width: 400px;
    height: 300px;
    border-radius: 15px;
`

export const Label = styled.h2`
    margin: 10px;
`
export const SmallText = styled.h3`
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    align-self: center;
`

export const Button = styled.button`
    padding: 10px 6px;
    left: 50%;
    background-color: #f3f3f3;
    border: solid #c4c4c4 1px;
    border-radius: 10px;
    width: 30%;
    transform: translate(120%, 0);
    &:hover {
        box-shadow: 0 0 8px #777676;
    }
`