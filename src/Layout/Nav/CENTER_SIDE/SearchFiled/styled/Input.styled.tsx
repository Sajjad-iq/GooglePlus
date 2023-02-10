import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";

export const Input = styled.input`
  width: 500px;
  padding: 10px 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
  display: none;
  background-color: rgb(241, 99, 99);
  font-family: 'Raleway', sans-serif;

  &:focus{
      outline: none;
  }
  
  @media(${device.laptop}){
    display: flex;
  }
`