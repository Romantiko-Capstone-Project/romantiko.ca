import { loginSuccess, loginFailure } from "./authSlice";
import axios from "axios";
import { useRouter } from "next/router";

export const login = async (dispatch, user) => {

  //dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3000/api/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(loginFailure());
  }
};
