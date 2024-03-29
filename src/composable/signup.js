import { projectAuth } from "../firebase/config";
import { ref } from "@vue/reactivity";

const error = ref("");
const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete  the signup ");
    }

    res.user.updateProfile({ displayName });
  } catch (err) {
    error.value = err.message;
  }
};
export { signup, error };
