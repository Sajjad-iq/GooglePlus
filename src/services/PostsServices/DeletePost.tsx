import axios from 'axios'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';

export const DeletePost = () => {

    const { HomeReFresh, setHomeReFresh } = useContext(GlobalContext)
    let User = JSON.parse(localStorage.getItem('User') || "");
    const Navigate = useNavigate()

    const DeletePostHandler = async (e: any) => {
        try {
            await axios({
                method: 'post',
                url: "http://127.0.0.1:4000/api/Posts/Delete",
                headers: {},
                data: {
                    PostId: e._id,
                    UserId: User._id,
                    PostOwnerId: e.PostOwnerId
                }
            }
            ).then(() => {
                setHomeReFresh(!HomeReFresh)
                Navigate("/")
            })
        } catch (e) {
            console.log(e)
        }
    }

    return { DeletePostHandler }
}
