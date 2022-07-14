import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyB7YeXf0oqPMpHvq4PjcHYN0fBJnws0pWA",
    authDomain: "getoneshot-live.firebaseapp.com",
    projectId: "getoneshot-live",
    storageBucket: "getoneshot-live.appspot.com",
    messagingSenderId: "594023479398",
    appId: "1:594023479398:web:7127f17d7b9d0910ea15a7",
    measurementId: "G-VJ0K06ERC6"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

const db = getDatabase();
//read from users/
const usersRef = ref(db, 'users/');
const users = onValue(usersRef, (snapshot) => {
    console.log(snapshot.val());
}
);









//Build WebPack
//https://youtu.be/rQvOAnNvcNQ?list=PLl-K7zZEsYLnfwBe4WgEw9ao0J0N1LYDR&t=435


