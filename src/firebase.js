import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCnMgt2jTFu6P4AHZ5QOaBnpoWkTCfe7Z8",
  authDomain: "netflix-clone-23f63.firebaseapp.com",
  projectId: "netflix-clone-23f63",
  storageBucket: "netflix-clone-23f63.appspot.com",
  messagingSenderId: "537803068444",
  appId: "1:537803068444:web:437b1aa5a9a7ba21f63bd9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db= getFirestore(app)

const signup = async (name,email,password)=>{
try{
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db,'user'),{
        uid:user.uid,
        name,
        authProvider:'local',
        email,
    })
}catch(error){
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
}
}

const login = async (email,password)=>{
try{
    await signInWithEmailAndPassword(auth,email,password); 
}catch(error){
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
}
}

const logout = ()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout};