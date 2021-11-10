import { projectAuth } from "../firebase/config";
import { ref } from "@vue/reactivity";

const error = ref("");
const login = async (email, password) => {
  error.value = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);

  } catch (err) {
    error.value = "you mother fucker create acc first or use the correct email and pasword"
  }
};
export { login, error };
