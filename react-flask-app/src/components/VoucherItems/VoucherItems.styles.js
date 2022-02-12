import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px 200px;
`
export const Image = styled.img`
    width: 600px;
    height: 500px;
    border-radius: 25px;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 100px;
`
export const Label = styled.h3`
    font-weight: 400;
    font-size: 54px;
    margin-bottom: 0;
`
export const Text = styled.h4`
    font-weight: 300;
    font-size: 26px;
`
export const Button = styled.button`
    margin-top: 30px;
    padding: 18px 32px;
    position: absolute;
    left: 50%;
    background-color: #f3f3f3;
    border: none;
    border-radius: 10px;
    transform: translate(-50%, 0);
    &:hover {
        box-shadow: 0 0 8px #777676;
    }
`