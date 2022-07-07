import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipeList } from "../routes/coodinator";

export const login = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipeList(navigate)
        setRightButtonText("Logout")
    })
    .catch((err) => alert(err.responser.data.mesage))
}

export const signUp = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipeList(navigate)
        setRightButtonText("Logout")
    })
    .catch((err) => alert(err.responser.data.mesage))
}