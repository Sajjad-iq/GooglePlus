import { Button } from "../../../../Components/common/Button.styled"
import { MenuImg } from "./styled/MenuImg.styled"
import MenuIcon from '../../../../assets/ICONS/menu_white_48dp.svg'
import { MouseEventHandler } from "react"

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const MenuButton = (props: Props) => {
    return (
        <Button onClick={props.onClick}>
            <MenuImg src={MenuIcon} alt='btn' />
        </Button>
    )
}
