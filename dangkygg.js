import {auth} from "./config.js"
import { GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const btn=document.querySelector('button')
const provider = new GoogleAuthProvider();
const xulydangky=()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user)
    localStorage.setItem('user',user.displayName)
    window.location='./home.html'
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
btn.addEventListener('click',xulydangky)