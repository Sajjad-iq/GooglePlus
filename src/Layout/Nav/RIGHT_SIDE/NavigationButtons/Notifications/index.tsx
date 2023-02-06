import { Icon } from './styled/Icon.styled'
import NotificationsIcon from "../../../../../assets/ICONS/notifications.svg"
import { NotificationsBtn } from './styled/NotificationsBtn.styled'

export const NotificationsButton = () => {
    return (
        <NotificationsBtn>
            <Icon src={NotificationsIcon} alt='search button' />
        </NotificationsBtn>
    )
}
