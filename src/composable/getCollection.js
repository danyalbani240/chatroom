import { ref } from "vue";
import { projectFirestore } from "../firebase/config";
const getCollection = (collection) => {
  const documents = ref(null);
  let collectionRefrence = projectFirestore
    .collection(collection)
    .orderBy("created");
  collectionRefrence.onSnapshot((snap) => {
    let results = [];
    snap.docs.forEach((doc) => {
      doc.data().created && results.push({ ...doc.data(), id: doc.id });
    });
    documents.value = results;
  });
};
