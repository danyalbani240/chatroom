import { projectAuth } from "../firebase/config";
import { ref } from "@vue/reactivity";

const error = ref("");
const login = async (email, password) => {
    error.value = null;
    try {
        const res = await projectAuth.signInWithEmailAndPassword(
            email,
            password
        );
    } catch (err) {
        error.value =
            "please create acc first or use the correct email and password";
    }
};
export { login, error };
