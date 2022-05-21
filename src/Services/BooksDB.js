import {db} from '../firebase';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  
  const booksCollectionRef =  collection(db, "Books");
  
  class booksDataService {
      addBook = (newContact) => {
          return addDoc(booksCollectionRef, newContact);
      }
  
      getAllBooks = () => {
        return getDocs(booksCollectionRef);
      }
  
      getBook = (id) => {
        const bookDoc = doc(db,'Books',id);
        return getDocs(bookDoc);
      }
  }
  
  
  export default new booksDataService;