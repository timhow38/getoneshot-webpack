import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


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
//
// Firebase Database
//
//const database = getDatabase();
const db = getDatabase();
//read from users/

const usersRef = ref(db, 'users/');
const users = onValue(usersRef, (snapshot) => {
    console.log(snapshot.val());
    //$(".print").append('<div class="command output">- Goodbye!</div>');
    //convert snapshot to a string
    var snapshotString = JSON.stringify(snapshot.val());
    //print snapshotString to .print
    $(".print").append('<div class="command output">- ' + snapshotString + '</div>');

});

//Function Iframe Loader
function iframeLoader(){
  const iframeUrlsRef = ref(db, 'iframeUrls/url01/');
  const iframeUrl = onValue(iframeUrlsRef, (snapshot) => {
    //create a new <a> tag and append to .print
    $(".print").append('<div class="command output"><a href="' + snapshot.val() + '" target="_blank">' + snapshot.val() + '</a></div>');
    //find all iframes in .panel and add the attribute src to the value of the snapshot
    $('.panel').each(function(){
      $(this).find('iframe').attr('src',snapshot.val());
    }
    );
      console.log(snapshot.val());
      //convert snapshot to a string
      var snapshotString = JSON.stringify(snapshot.val());
      console.log(snapshotString);
      //print snapshotString to .print
      $(".print").append('<div class="command output">- ' + snapshotString + '</div>');
  });
}


//
// Firebase Auth
//

const provider = new GoogleAuthProvider();
const auth = getAuth();

//sign in with popup
function googleSignIn(){
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    //hide sign in button
    document.getElementById("sign-in-button").style.display = "none";
    //show sign out button
    document.getElementById("sign-out-button").style.display = "block";
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

function googleSignOut(){
const auth = getAuth();
    console.log('SignOut -Call')
    signOut(auth).then(() => {
    // Sign-out successful.
    console.log('SignOut -Success')
    //Print to console
    $(".print").append('<div class="command output">- Goodbye!</div>');
    }).catch((error) => {
    // An error happened.
    console.log(error);
    });
}

function checkAuthState(){
  const auth = getAuth();
    auth.onAuthStateChanged(user => {
        if(user){
            console.log('User is signed in');
            console.log(user);
            iframeLoader();
            //hide sign in button
            document.getElementById("sign-in-button").style.display = "none";
            //show sign out button
            document.getElementById("sign-out-button").style.display = "block";
            //iframe.contentWindow.document
            //iframe.contentWindow.document.querySelector('.css-i9e4u2').style.display = "none";
            //find iframe with id "panel" and add css property to class .css-i9e4u2 in iframe
            //var iframe = document.getElementById("panel");
            //var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            //var iframeBody = iframeDoc.querySelector('.css-i9e4u2');
            //iframeBody.style.display = "none";
            // Panel Change
            $('.panel').each(function(){
                if(!$(this).hasClass('posMiddle')){
                }
              }
            );
            //Print to console
            $(".print").append('<div class="command output">- Hello ' + user.displayName + '!</div>');
        }else{
            console.log('User is not signed in');
            //show sign in button
            document.getElementById("sign-in-button").style.display = "block";
            //hide sign out button
            document.getElementById("sign-out-button").style.display = "none";

            //remove src attribute from iframes
            $('.panel').each(function(){
                $(this).find('iframe').removeAttr('src');
            }
            );
            // Panel Change
            $('.panel').each(function(){
                if(!$(this).hasClass('posMiddle')){
                  $(this).find('.owlbear-form').hide();
                }
              }
            );

        }
    }
    );

}


checkAuthState();


document.getElementById("sign-in-button").addEventListener("click", googleSignIn);
//create event listener for sign out button and call googleSignOut function
document.getElementById("sign-out-button").addEventListener("click", googleSignOut);





//Build WebPack
//https://youtu.be/rQvOAnNvcNQ?list=PLl-K7zZEsYLnfwBe4WgEw9ao0J0N1LYDR&t=435


//npm i firebase
//npm i webpack webpack-cli - D
//node_modules/.bin/webpack --entry ./src/index.js -o dist
//npm install -g serve
//serve dist/

// Key Press
// Toggle Overlay - [Shift + Tab]
// Toggle Zoom - [ESC], [Enter]
// Reset Page / Local Storage - [Ctrl + Shift + L]
// Center Page - [Ctrl + Shift + C]
// Navigate Site - [Left], [Right], [Up], [Down] Arrows
// Toggle Console = [~]

