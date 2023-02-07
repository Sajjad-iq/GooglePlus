import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const CommentBody = styled.article`
 color:black;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size:0.9rem;

    @media ${device.tablet} {
           font-size:1rem; 
      }
`