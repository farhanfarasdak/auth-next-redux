import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { authFirebase } from "../config/firebase"
import { insertUserBiodata } from "./user"

export const firebaseRegister = async (email, password, job, age) => {
  try{
    const userCredential = await createUserWithEmailAndPassword(authFirebase, email, password)
    const user = userCredential.user
    console.log(user)
    localStorage.setItem('jwt-token', user.accessToken)
    // TODO INSERT TO DATABASE
    const data = {
      email: email,
      job: job,
      age: age
    }
    await insertUserBiodata(user.uid, data)
    return {
      status: 'SUCCESS', 
      data: {
        uid: user.uid,
        email: email,
        job: job,
        age: age,
        profileUrl: null
      }
    }
  }catch(err){
    // todo something
    return {
      status: 'ERROR',
      message: err.message
    }
  }
}

export const firebaseLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(authFirebase, email, password)
    const user = userCredential.user
    localStorage.setItem('jwt-token', user.accessToken)
    return {
      status: 'SUCCESS'
    }
  } catch (error) {
    return {
      status: 'ERROR',
      message: error.message
    }
  }
  

}

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
