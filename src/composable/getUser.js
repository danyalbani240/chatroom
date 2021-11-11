import { ref } from "vue";
import { projectAuth } from "../firebase/config";
const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  console.log("state changed", _user);
  user.value = _user;
});
export { user };
