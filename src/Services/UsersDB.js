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

const usersCollectionRef = collection(db,'Users');

class usersDataService{
    addUsers = (newUser) => {
        return addDoc(usersCollectionRef , newUser)
    }

    getAllUsers = () => {
        return getDocs(usersCollectionRef);
    }
}

export default new usersDataService;