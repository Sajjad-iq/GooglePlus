import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";
import { Colors } from "../../../../../assets/Colors";

export const Input = styled.input`
  width: 500px;
  padding: 10px 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
  display: none;
  background-color: ${Colors.Primary.Lightgray};
  font-family: 'Raleway', sans-serif;

  &:focus{
      outline: none;
  }
  
  @media(${device.laptop}){
    display: flex;
    width:55%;
  }
`