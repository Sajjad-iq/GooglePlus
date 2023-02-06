import styled from "styled-components";

interface Props {
    display: string;
    width: string
    align: string
    padding: string
}
export const ToggleRow = styled.section<Props>`
 display: ${p => p.display};
 width: ${p => p.width};
 justify-content: ${p => p.align};
 align-items: center;
 padding:${p => p.padding};
 background-color: white;
 margin:5px 0;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
z-index:10;
`