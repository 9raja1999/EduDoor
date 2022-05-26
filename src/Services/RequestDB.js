import {db} from '../firebase';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

const requestCollectionRef = collection(db,"requestTutions");

class RequestDataService {
    addRequest = (newRequest) => {
        return addDoc(requestCollectionRef, newRequest);
    }
}

export default new RequestDataService;