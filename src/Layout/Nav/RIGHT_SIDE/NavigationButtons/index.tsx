import { SearchButton } from "./SearchButton"
import { Wrapper } from "./Wrapper.styled"
import { NavButton } from "../../../../Components/shared/NavButton";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export const NavigationButtons = () => {
    return (
        <Wrapper>
            <SearchButton />
            <div style={{ display: window.innerWidth >= 1024 ? "flex" : "none" }}>
                <NavButton CLass='NAV' Name='' To='/Notifications' ICON={faBell} />
            </div>
        </Wrapper>
    )
}
