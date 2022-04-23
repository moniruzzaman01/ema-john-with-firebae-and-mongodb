import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const gooleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((res) => {
      const user = res.user;
      setUser(user);
      console.log(user);
      navigate(from, { replace: true });
    });
  };
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });
  const handleSignOut = () => {
    signOut(auth);
  };
  return { user, gooleSignIn, handleSignOut };
};
export default useFirebase;
