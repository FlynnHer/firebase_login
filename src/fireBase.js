import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged, 
  signOut} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTf5bWcZjMra9FqKcev_D_OGg6qX5b72Y",
  authDomain: "alpha-study-c8b83.firebaseapp.com",
  databaseURL: "https://alpha-study-c8b83-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alpha-study-c8b83",
  storageBucket: "alpha-study-c8b83.appspot.com",
  messagingSenderId: "7893724944",
  appId: "1:7893724944:web:9a08e23061c37287a93f95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//-- 외부 호출 함수들 ----------------------
export function signUp (email, password) {
  // try {
  //   return createUserWithEmailAndPassword(auth, email, password)
  // } catch {
  //   alert("등록 실패 : 이미 등록된 메일 주소입니다")
  //   console.log("signUp Error")
  // }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    return userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    if (errorCode==="auth/email-already-in-use"){
      alert("등록 실패, 이미 등록된 메일 주소입니다")
    } else if (errorCode==="auth/weak-password"){
      alert("등록 실패, 비밀번호를 6자리 이상 입력해 주세요")
    } 
    // ..
  });
}

export function logIn (email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    if (errorCode==="auth/user-not-found"){
      alert("로그인 실패, 등록되지 않은 계정 입니다")
    } else if (errorCode==="auth/wrong-password"){
      alert("로그인 실패, 틀린 패스워드 입니다")
    }
    // auth/too-many-requests
  });
}

export function logOut() {
  return signOut(auth);
}

export function useAuth() {     // Custom Hook
  const [currentUser, setCurrentUser ] = useState();

  useEffect(()=> {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, [])
  return currentUser;
} // End of 현재 로그인 상태 확인 Hook