import styled from "styled-components";
import { device } from "../../../../../../assets/breackPoints";

export const UserButton = styled.button`
border: none;
background: none;
color: white;
margin:0 12px;
display: none;
justify-content: center;
align-items: center;

@media(${device.laptop}){
    display: flex;
  }
`