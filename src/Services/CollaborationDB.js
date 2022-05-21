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

const CollaborationCollectionRef = collection(db, "Collaboration");

class CollaborationDataService {
    addCollaborationRequest = (newCollaboration) => {
        addDoc(CollaborationCollectionRef , newCollaboration);
    }
}

export default new CollaborationDataService;