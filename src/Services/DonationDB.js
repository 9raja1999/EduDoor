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

const donateCollectionRef = collection(db,"Donations");

class DonationsDataService {
    addDonations = (newDonations) => {
        return addDoc(donateCollectionRef, newDonations);
    }
}

export default new DonationsDataService;