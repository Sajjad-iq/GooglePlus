import { SearchBtn } from './styled/SearchBtn.styled'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const SearchButton = () => {
    return (
        <SearchBtn>
            <FontAwesomeIcon className='fa-icon' icon={faMagnifyingGlass} />
        </SearchBtn>
    )
}
