import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const auth = window.firebaseAuth;

onAuthStateChanged(auth, user => {
if (!user) {
    // Not logged in
    window.location.href = "login.html";
}
console.log(user)
});