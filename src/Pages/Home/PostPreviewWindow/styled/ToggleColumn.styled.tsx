import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";
import { Colors } from "../../../../assets/Colors";
interface Props {
  width: string
  align: string
  padding: string
  display: string
}
export const ToggleColumn = styled.section<Props>`
 width: ${p => p.width};
 display: ${p => p.display};
 justify-content: center;
 align-items: ${p => p.align};
 flex-direction: column;
 padding:${p => p.padding};

 @media(${device.laptop}){
    width:75%;
    background-color: white ;

  }
`