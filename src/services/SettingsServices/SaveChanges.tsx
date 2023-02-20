import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const SaveChanges = () => {

    const Navigate = useNavigate()

    const Save = async () => {
        const User = await JSON.parse(localStorage.getItem('User') || "");

        try {
            await axios({
                method: 'put',
                url: `http://127.0.0.1:4000/api/Profile/${User._id}`,
                headers: {},
                data: {
                    User
                }
            }
            ).then(() => Navigate("/"))

        } catch (e) {
            console.log(e)
        }

    }

    return { Save }
}
