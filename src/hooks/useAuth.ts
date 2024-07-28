import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { getUser } from "../features/auth/authSlice";

export const useCheckAuthenticated = () => {
  const user = localStorage.getItem("userDetails");
  return user
    ? { user, isAuthenticated: true }
    : { user, isAuthenticated: false };
};

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = localStorage.getItem("user");

  async function initUser(user: number) {
    dispatch(getUser(user));
  }

  useEffect(() => {
    user && initUser(Number(user));
  }, []); // eslint-disable-line
};


//it is not complex, rather it is the real practical way in which the websites are actually designed right there
//for this particular ways as such
//like for being present upon there more particularly just upon there
//what do you like just particularly think that how will all of this would be 