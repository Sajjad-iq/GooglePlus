import { Icon } from './styled/Icon.styled'
import UserIcon from "../../../../../assets/ICONS/account_circle_white_48dp.svg"
import { UserButton } from './styled/UserButton.styled'

export const User = () => {
    return (
        <UserButton>
            <Icon src={UserIcon} alt='search button' />
        </UserButton>
    )
}
