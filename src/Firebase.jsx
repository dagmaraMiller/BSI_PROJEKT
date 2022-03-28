// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup} from 'firebase/auth'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0oZ4-KJodAjzwYEsWEl_YSlFqkqdJTnE",
  authDomain: "projekt-bsi-dm.firebaseapp.com",
  projectId: "projekt-bsi-dm",
  storageBucket: "projekt-bsi-dm.appspot.com",
  messagingSenderId: "987326385216",
  appId: "1:987326385216:web:b450d2a818fe6e501163a5",
  measurementId: "G-PY5DXLLSQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const githubProvider = new GithubAuthProvider()


export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
       const name = result.user.displayName;
       const email = result.user.email;
       const profilePic = result.user.photoURL;

       localStorage.setItem("name", name)
       localStorage.setItem("email", email)
       localStorage.setItem("profilePic", profilePic)
       
       
    }).catch((error)=> {
        console.log(error);
    })
}


export const signInWithFacebook = () => {
  signInWithPopup(auth, facebookProvider)
  .then((result) => {
     const name = result.user.displayName;
     const email = result.user.email;
     const profilePic = result.user.photoURL;

     localStorage.setItem("name", name)
     localStorage.setItem("email", email)
     localStorage.setItem("profilePic", profilePic)

  }).catch((error)=> {
      console.log(error);
  })
}

export const signInWithGithub = () => {
  signInWithPopup(auth, githubProvider)
  .then((result) => {
     const name = result.user.displayName;
     const email = result.user.email;
     const profilePic = result.user.photoURL;

     localStorage.setItem("name", name)
     localStorage.setItem("email", email)
     localStorage.setItem("profilePic", profilePic)

  }).catch((error)=> {
      console.log(error);
  })
}

