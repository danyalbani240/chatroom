import ref from "vue";
import { projectAuth } from "../firebase/config";

let error = ref(null);

const logout = async () => {
  error.value = null;
  try {
    await projectAuth.signOut();
  } catch (err) {
    console.log(err);
  }
};

export { error, logout };
