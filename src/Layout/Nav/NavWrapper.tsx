import styled from "styled-components";
import { device } from "../../assets/breackPoints";
import { Colors } from "../../assets/Colors";

export const NavWrapper = styled.nav`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color:${Colors.Primary.white} ;
 padding:12.5px 0px;
 box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
 border:1px solid gray;
 @media(${device.laptop}){
 box-shadow:unset;
  }
`