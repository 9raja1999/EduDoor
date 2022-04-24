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

const subscribeCollectionRef = collection(db, "subscribe");

class subscribeDataService {
    subscribeMail = (newMail) => {
        return  addDoc(subscribeCollectionRef, newMail);
    }
}

export default new subscribeDataService;