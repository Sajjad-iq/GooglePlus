import { FooterWrapper } from './styled/FooterWrapper'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { NavButton } from '../../Components/shared/NavButton';

export const Footer = React.memo(() => {
    return (
        <FooterWrapper>
            <NavButton CLass='footer' Name='Home' To='/GooglePlus/' ICON={faHouse} />
            <NavButton CLass='footer' Name='Profile' To='/Profile' ICON={faUser} />
            <NavButton CLass='footer' Name='People' To='/People' ICON={faUsers} />
            <NavButton CLass='footer' Name='Notifications' To='/Notifications' ICON={faBell} />
        </FooterWrapper>
    )
})
