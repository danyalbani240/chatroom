import { ref } from "vue";
import { projectAuth, projectFirestore } from "../firebase/config";
const useCollection = (collection) => {
  const addDoc = async (doc) => {
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (error) {
      console.log(error);
    }
  };
  return { addDoc };
};
export default useCollection;
