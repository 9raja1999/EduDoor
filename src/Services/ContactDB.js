import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const contactCollectionRef =  collection(db, "contact");

class contactDataService {
    addContact = (newContact) => {
        return addDoc(contactCollectionRef, newContact);
    }
}


export default new contactDataService;