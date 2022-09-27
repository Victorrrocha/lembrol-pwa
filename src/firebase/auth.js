import firebase from "./firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebase);

export default auth;
