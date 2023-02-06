import styled from "styled-components";

interface Props {
    display: string;
}
export const WindowWrapper = styled.section<Props>`
 width: 100%;
 height: 100%;
 display: ${p => p.display};
 justify-content: center;
 align-items: flex-start;
 padding-top:75px;
 background-color: rgba(239, 238, 238, 0.475);
 position:absolute;
 top:0;
 z-index:11;

`