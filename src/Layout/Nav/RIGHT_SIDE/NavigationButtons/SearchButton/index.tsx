import { Icon } from './styled/Icon.styled'
import SearchIcon from "../../../../../assets/ICONS/search_white_48dp.svg"
import { SearchBtn } from './styled/SearchBtn.styled'

export const SearchButton = () => {
    return (
        <SearchBtn>
            <Icon src={SearchIcon} alt='search button' />
        </SearchBtn>
    )
}
