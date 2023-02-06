import styled from "styled-components";
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
`