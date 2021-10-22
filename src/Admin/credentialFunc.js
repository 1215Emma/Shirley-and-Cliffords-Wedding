import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utilities/firebaseConfig";

export const register = async (values) => {
  console.log(values.email, "in register")
  const email = values.email;
  const password = values.password;
  console.log(email, password)
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (values) => {
  ;
  const email = values.email;
  const password = values.password;
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

export const logout = async () => {

  await signOut(auth)
};

export const authVerification = ( setUser ) => {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
}