import { SearchFiled } from "./CENTER_SIDE/SearchFiled"
import { LogoAndPage } from "./LEFT_SIDE/Logo_Page"
import { MenuButton } from "./LEFT_SIDE/MenuButton"
import { NavigationButtons } from "./RIGHT_SIDE/NavigationButtons"
import { Section } from "./Section.styled"
import { NavWrapper } from "./NavWrapper"
import React, { MouseEventHandler } from "react"

interface Props {
    MenuButtonHandler: MouseEventHandler
}
export const Nav = React.memo((props: Props) => {
    return (
        <NavWrapper>
            <Section>
                <MenuButton onClick={props.MenuButtonHandler} />
                <LogoAndPage />
            </Section>

            <SearchFiled />
            <NavigationButtons />
        </NavWrapper>
    )
})
