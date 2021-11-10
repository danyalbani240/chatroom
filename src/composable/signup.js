import { projectAuth } from "../firebase/config";

const signup = async (email, password, displayName) => {
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete  the signup ");
    }

    res.user.updateProfile({ displayName });
    console.log(res.user)
  } catch (err) {
    console.log(error);
  }
};
export default signup;
