import { publicRequest, userRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

let user_id
try {
    user_id = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser)._id
}
catch {
    user_id = ""
}

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data));
    } catch {
        dispatch(loginFailure());
    }
}

export const placeOrder = async (data) => {
    try {
        const res = await userRequest.post(`/order/createOrder/${user_id}`, data)
        console.log(res)
    } catch {
    }
}