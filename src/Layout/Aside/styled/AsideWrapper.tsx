import styled from "styled-components";
import { device } from "../../../assets/breackPoints";
import { Colors } from "../../../assets/Colors";
interface Props {
  display: string
}
export const AsideWrapper = styled.aside<Props>`
 width: 200px;
 height:100%;
 display: ${p => p.display};
 justify-content: flex-start;
 align-items: center;
 flex-direction: column;
 background-color: white;
 border:1px solid gray;
 position: absolute;
 left:0;
 z-index:11;

  @media ${device.tablet} {
     width: 300px;
    }
  @media ${device.laptop} {
    position: static;
    width: 250px;
    border:none;
    background-color: ${Colors.Primary.background};
    }

`