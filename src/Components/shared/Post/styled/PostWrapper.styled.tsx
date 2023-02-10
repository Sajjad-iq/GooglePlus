import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const PostWrapper = styled.section`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: white;
 flex-direction: column;
 border:none;
 border:1px solid rgb(201, 201, 201);
 transform: 3s;
z-index:10;


 @media ${device.laptop} {
   width: 95%;
   margin:10px;
  }
 `