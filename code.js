const MAX_REPONSES = 300

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm7hTWEmt1JRX3JXpq_dDNQWo0KKKC008",
  authDomain: "shvushon2.firebaseapp.com",
  databaseURL: "https://shvushon2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shvushon2",
  storageBucket: "shvushon2.appspot.com",
  messagingSenderId: "833572668563",
  appId: "1:833572668563:web:efd646d875de094f203966",
  measurementId: "G-VTT9E38KE8"
};

initializeApp(firebaseConfig);

var count_for_all = '';
var big_all_count = 0;
var small_all_count = 0;
var qRef = ref(getDatabase());
var snapshot = await get(qRef);
var val = snapshot.val();

for (var key in val) // in yeshivot
{
  var musag = val[key][0];
  var big_count = musag % MAX_REPONSES;
  var small_count = Math.floor(musag / MAX_REPONSES);
  big_all_count += big_count;
  small_all_count += small_count;
  count_for_all += `<p>${key}: ${small_count}, ${big_count}</p>\n`;
}

document.getElementById('count').innerHTML += '' + big_all_count + ', ' + small_all_count
document.getElementById('count-for-all').innerHTML += count_for_all;

