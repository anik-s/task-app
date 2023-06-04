import styled from "@emotion/styled";

export const Title = styled.h1`
    color: rgba(27, 46, 89, 1);
    height: auto;
    position: relative;
    font-size: 48px;
    align-self: auto;
    text-align: center;
    font-family: Archivo,serif;
    font-weight: bold;
    line-height: 60px;
    font-stretch: normal;
    text-decoration: none;
`

export const OutlineButton = styled.button`
    padding: 0 20px;
    position: relative;
    border-color: transparent;
    border-radius: 50px;
    background-color: rgba(38, 111, 242, 0.10000000149011612);
    color: rgba(38, 111, 242, 1);
    height: auto;
    font-size: 14px;
    align-self: auto;
    text-align: left;
    font-family: Arimo,serif;
    font-weight: bold;
    line-height: 31px;
    font-stretch: normal;
    margin-right: 0;
    margin-bottom: 0;
    text-decoration: none;
`

export const ButtonGroup = styled.div`
    width: 402px;
    height: 50px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-shrink: 1;
    border: none;
    border-radius: 50px;
    background-color: rgba(211, 225, 250, 1);
`

export const ToggleButton = styled.button`
  width: 135px;
  height: 40px;
  padding: 2px;
  box-sizing: border-box;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 50px;
  background-color: ${props => props.active ? 'rgba(38, 111, 242, 1)' : 'rgba(211, 225, 250, 1)'};
  color: ${props => props.active ? 'rgba(255, 255, 255, 1)' : 'var(--dl-color-default-black)'};
  font-size: 15px;
  text-align: center;
  font-family: Arimo,serif;
  font-weight: bold;
  line-height: 31px;
  font-stretch: normal;
  text-transform: uppercase;
`

export const Button = styled.button`
    padding: 20px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    font-family: Arimo;
    letter-spacing: 10%;
    line-height: 60%;
    color: #ffffff;
  background-color: blue;
  box-sizing: border-box;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 5px;
`