import styled from "styled-components";
import { device } from "../../../assets/breackPoints";
import { Colors } from "../../../assets/Colors";

export const SplitWrapper = styled.section`
 width: 100%;
 height:100vh;
 display: flex;
 flex-direction: column;
 position: relative;
 padding-top:57px;
 padding-bottom:55px;

  @media ${device.tablet} {
    padding-top:64px;
    padding-bottom:65px;
    }
    @media ${device.laptop} {
    padding-top:67px;
    padding-bottom:0px;
    background-color:${Colors.Primary.background} ;

    }

`