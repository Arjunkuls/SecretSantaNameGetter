import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, addDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


var names;

const firebaseApp = initializeApp({
    apiKey: "AIzaSyB7S9c0ydSYPy0f3lrIHgTdlrTuI9U7uAE",
    authDomain: "a-whole-lot-of-small-stuff.firebaseapp.com",
    projectId: "a-whole-lot-of-small-stuff",
    storageBucket: "a-whole-lot-of-small-stuff.appspot.com",
    messagingSenderId: "879852127395",
    appId: "1:879852127395:web:180b2066f6630fe4a02b16"
  });


  const db = getFirestore();

  document.getElementById('sub').onclick = getName;

async function getName(){
const docRef = doc(db, "secretSanta", "Names");
const docSnap = await getDoc(docRef);
var names = docSnap.data().List;
console.log(outPut);
var me = document.getElementById("name").value;
var outPut = choose(names);
const index = names.indexOf(outPut);
if (index > -1) {
  names.splice(index, 1);
}
if (outPut == me){
    names.pop(outPut);
    outPut = choose(names);
}

await setDoc(doc(db, "secretSanta", "Names"), {
    List: names
  });
  alert("You got " + outPut);



}

    // db.collection("secretSanta").doc("Names").get().then(function(doc) {
    //     names = doc.data();
    //     console.log(names.List);
    //     var outPut = choose(names.List);
    //     if (outPut == me) {
    //         names.List.pop(outPut);
    //         outPut = choose(names.List);
    //     }
    //     alert(outPut);
    // })


    function choose(choices) {
        var index = Math.floor(Math.random() * choices.length);
        return choices[index];
      }      
