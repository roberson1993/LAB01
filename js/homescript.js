import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOT4ObzSCAAS4vGNvZIEsjqYhUhJPF6N4",
  authDomain: "database01-529ee.firebaseapp.com",
  databaseURL: "https://database01-529ee-default-rtdb.firebaseio.com",
  projectId: "database01-529ee",
  storageBucket: "database01-529ee.firebasestorage.app",
  messagingSenderId: "463280121570",
  appId: "1:463280121570:web:c534d7e1ae8b6048b160bb",
  measurementId: "G-FPZXSEGPN9"
};


const gallery = document.getElementById("gallery");

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const nodeRef = ref(database, "SOT");


// 
let allPeople = {};



// Function to fetch data from Firebase
onValue(
  nodeRef,
  (snapshot) => {
    allPeople = snapshot.val() || {};
    renderGallery();
  }
);


// Function to render the gallery
function renderGallery() {
  gallery.replaceChildren();
  gallery.classList.remove("error");


  Object.entries(allPeople).forEach(([id, person]) => {

    const item = document.createElement("div");
    item.className = "profile-card";
    const imageUrl = document.createElement("img");
    imageUrl.src = person.image;// Fallback image if none
    imageUrl.alt = person.name || "Unknown";
    imageUrl.className = "driver-image";
    item.append(imageUrl);


    const profileInfo = document.createElement("div");
    profileInfo.className = "profile-info";
    item.append(profileInfo);

    const profileName = document.createElement("p");
    profileName.className = "profile-name";
    profileName.textContent = person.name || "Unknown";
    profileInfo.append(profileName);


    const profileBadge = document.createElement("span");
    profileBadge.className = "profile-badge";
    profileBadge.textContent = "✔ Verified";
    profileInfo.append(profileBadge);

    const profileMeta = document.createElement("p");
    profileMeta.className = "profile-meta";
    profileMeta.textContent = `Retrouvées en ${person.date || "Unknown Date"} · ${person.location || "Unknown Location"}`;
    profileInfo.append(profileMeta);


    const profileActions = document.createElement("div");
    profileActions.className = "profile-actions";
    profileInfo.append(profileActions);

    const reclamationLink = document.createElement("a");
    reclamationLink.className = "btn-primary";
    reclamationLink.href = "reclamer.html";
    reclamationLink.textContent = "Reclamation";
    profileActions.append(reclamationLink);

    const detailsButton = document.createElement("button");
    detailsButton.className = "btn-ghost";
    detailsButton.type = "button";
    detailsButton.textContent = "Plus de détails";
    profileActions.append(detailsButton);
    detailsButton.addEventListener("click", () => persondata(person));



    gallery.append(item);
  });

}


function persondata(person) {
  console.log(person);
  alert(person.name);
}