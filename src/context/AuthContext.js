import React, { createContext, useContext, useEffect, useReducer } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { ACTION_CHECK } from "../const";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);
const INIT_STATE = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_CHECK.CHECK_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const googleProvider = new GoogleAuthProvider();

  function checkUser() {
    return onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ACTION_CHECK.CHECK_USER,
        payload: user,
      });
    });
  }

  useEffect(() => {
    checkUser();
  }, []);

  async function authWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  }
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function logOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("error");
    }
  }

  const values = {
    authWithGoogle,
    register,
    user: state.user,
    logOut,
    signIn,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
