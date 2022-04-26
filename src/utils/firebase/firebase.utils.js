import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
//***doc is to get a document instance. get doc to get thepr access  data and setDoc to set the data***///
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD8BaE9i4OtUgfRgeDiWMlFi_6TE3bv8d0",
  authDomain: "awesome-clothing-12eb4.firebaseapp.com",
  projectId: "awesome-clothing-12eb4",
  storageBucket: "awesome-clothing-12eb4.appspot.com",
  messagingSenderId: "770579675776",
  appId: "1:770579675776:web:2bed601f192146f2c08465",
};

// Initialize Firebase
const fireaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promps: "select__account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// instantiate db
export const db = getFirestore();
//db points to the database inside the console
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Opps Error!", error.message);
    }
  }
  return userDocRef;
};
