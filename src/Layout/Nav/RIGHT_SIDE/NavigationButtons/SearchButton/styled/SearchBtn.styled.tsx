import styled from "styled-components";
import { device } from "../../../../../../assets/breackPoints";

export const SearchBtn = styled.button`
border: none;
background: none;
color: white;
margin:0 5px;
display: flex;
justify-content: center;
align-items: center;

@media(${device.laptop}){
    display: none;
  }
`