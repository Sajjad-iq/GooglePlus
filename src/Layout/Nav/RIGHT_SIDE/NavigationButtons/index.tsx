import { NotificationsButton } from "./Notifications"
import { SearchButton } from "./SearchButton"
import { User } from "./User"
import { Wrapper } from "./Wrapper.styled"

export const NavigationButtons = () => {
    return (
        <Wrapper>
            <SearchButton />
            <NotificationsButton />
            <User />
        </Wrapper>
    )
}
