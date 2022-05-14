import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, setDoc, collection, addDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const config = {
    apiKey: "AIzaSyAfhbW7GYYhOXv2pRQD0fDF7AZ-bHKV7dQ",
    authDomain: "ysp-api.firebaseapp.com",
    projectId: "ysp-api",
    storageBucket: "ysp-api.appspot.com",
    messagingSenderId: "13432863981",
    appId: "1:13432863981:web:8b33f610262f9263e760e4",
    measurementId: "G-TEWHX7DB27"
  };

const app = initializeApp(config);
export const auth = getAuth(app);
export const firestore = getFirestore();
export const realTimeDb = getDatabase(app);
// export const dateNow = firestore.Timestamp.fromDate(new Date());

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = doc(firestore, "users",`${userAuth.uid}`);
    //const userRef = firestore.docment(`users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);
    if(!snapShot._document){
      console.log(userAuth.displayName)
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userRef,{
                name:displayName, 
                photo: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png',
                email, 
                createdAt, 
                ...additionalData
            })
        }catch(error){
            console.log('Error creando usuario', error.message)
        }
    }
return userRef;
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
//export const signOuts = () => signOut(auth);
export const signInWithGoogle = () => signInWithPopup(auth, provider);


export default app;