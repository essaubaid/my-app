import { useSelector } from "react-redux";
import { publicRequest, userRequest } from "../requestMethod";
import { emptyCart, productFailure, productStart } from "./cartRedux";
import { loginFailure, loginOutSuccess, loginStart, loginSuccess } from "./userRedux"

// let user_id
// try {
//     user_id = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser)._id
// }
// catch {
//     user_id = ""
// }
// console.log(user_id)

export const Login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data));
    } catch {
        dispatch(loginFailure());
    }
}

export const logout = async (dispatch) => {
    dispatch(loginStart());
    try {
        const res = await userRequest.put(`/auth/logout/${localStorage.getItem("userId")}`, {}, {
            headers: { token: `Bearer ${localStorage.getItem("token")}` }
        })
        dispatch(loginOutSuccess());
    } catch {
        dispatch(loginFailure());
    }
}

export const PlaceOrder = async (dispatch, data) => {
    dispatch(productStart());
    try {
        const res = await userRequest.post(`/order/createOrder/${localStorage.getItem("userId")}`, data, {
            headers: { token: `Bearer ${localStorage.getItem("token")}` }
        })
        dispatch(emptyCart());
    } catch {
        dispatch(productFailure())
    }
}