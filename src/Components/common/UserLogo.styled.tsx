import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const UserLogo = styled.img`
  width: 42px;
  margin-right:10px;
  border-radius: 50%;

@media ${device.tablet} {
    width: 55px;
  }
  @media ${device.laptop} {
    width: 45px;
  }
`