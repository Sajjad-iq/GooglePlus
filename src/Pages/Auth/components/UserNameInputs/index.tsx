import { Column } from "../../../../Components/shared/Column.styled"
import { AddFamilyNameHandler } from "../../../../services/SignUpServices/AddFamilyNameHandler"
import { AddUserNameHandler } from "../../../../services/SignUpServices/AddUserNameHandler"
import { FlexSection } from "../../styled/FlexSection.styled"
import { Input } from "../../styled/Input.styled"
import { RedFlag } from "../RedFlag"

export const UserNameInput = () => {

    const { OnUserNameChange, IsUserNameValid } = AddUserNameHandler()
    const { OnFamilyNameChange, IsFamilyNameValid } = AddFamilyNameHandler()

    return (
        <Column width='100%' padding='0' align='flex-start'>
            <FlexSection >
                <Input name="user-name" IsValidValue={IsUserNameValid} onChange={OnUserNameChange} placeholder="User Name" required />
                <Input name="family-name" IsValidValue={IsFamilyNameValid} onChange={OnFamilyNameChange} placeholder="Family Name" required />
            </FlexSection>

            <RedFlag RedFlagMessage="Make sure not to add any symbols" display={IsUserNameValid && IsFamilyNameValid ? "none" : "flex"} />
        </Column>
    )
}
