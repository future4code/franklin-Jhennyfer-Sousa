import { useLayoutEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { goToRecipeList } from '../routes/coodinator';

const useUnprotectedPage = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
    const token = localStorage.getItem("token")
    if (token){
        goToRecipeList(navigate)
    }
    }, [navigate])
}
export default useUnprotectedPage