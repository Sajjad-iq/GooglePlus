import { Input } from "./styled/Input.styled"

export const SearchFiled = () => {

    return (
        <Input onChange={() => console.log("Type..")} type={"search"} placeholder="Search.." />
    )
}
