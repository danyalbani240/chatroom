import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";
const getCollection = (collection) => {
  const documents = ref(null);
  let collectionRefrence = projectFirestore
    .collection(collection)
    .orderBy("created");
  const unsubscribe = collectionRefrence.onSnapshot((snap) => {
    let results = [];
    snap.docs.forEach((doc) => {
      doc.data().created && results.push({ ...doc.data(), id: doc.id });
    });
    documents.value = results;
  });
  watchEffect((onInvalidate) => {
    //unsubscribe when the user logged out and the collection updatet to not get more snap shots over and over again
    onInvalidate(() => unsubscribe());
  });
  return { documents };
};

export default getCollection;
