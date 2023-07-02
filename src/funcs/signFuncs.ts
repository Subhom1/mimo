import { AUTH } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "./errorFunc";

export const singIn = async (
  email: any,
  password: any,
  setLoading: any,
  setEmail: any,
  setPassword: any
) => {
  setLoading(true);
  try {
    if (AUTH !== undefined) {
      const response = await signInWithEmailAndPassword(AUTH, email, password);
    }
  } catch (error: any) {
    alert(FirebaseError(error.message));
  } finally {
    setLoading(false);
    setEmail("");
    setPassword("");
  }
};

export const singUp = async (
  email: any,
  password: any,
  setLoading: any,
  setEmail: any,
  setPassword: any
) => {
  setLoading(true);
  try {
    if (AUTH !== undefined) {
      const response = await createUserWithEmailAndPassword(
        AUTH,
        email,
        password
      );
    }

    alert("You have been registered! Now you can log in!");
  } catch (error: any) {
    alert(FirebaseError(error.message));
  } finally {
    setLoading(false);
    setEmail("");
    setPassword("");
  }
};
