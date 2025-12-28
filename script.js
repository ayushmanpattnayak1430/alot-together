// -------------------- ELEMENTS --------------------
const openModal = document.getElementById("openModal");
const modal = document.getElementById("memoryModal");
const closeModal = document.getElementById("closeModal");
const submitBtn = document.querySelector(".submit-btn");
const errorMsg = document.getElementById("errorMsg");

const personalSection = document.getElementById("personalSection");
const friendName = document.getElementById("friendName");
const friendMemory = document.getElementById("friendMemory");
const friendNote = document.getElementById("friendNote");
const cardsContainer = document.getElementById("cardsContainer");
const backBtn = document.getElementById("backBtn");

// -------------------- FRIEND DATA --------------------
const friends = {
  "AT-01": { name: "Ayushman", intro: "Some memories don’t need photos.", note: "You became family." },
  "AT-02": { name: "Ritika", intro: "From strangers to a constant presence.", note: "Thank you for being there." },
  "AT-03": { name: "Kritika", intro: "Always lights up the room.", note: "Glad we met by chance." },
  "AT-04": { name: "Prachi", intro: "A smile that never fades.", note: "Your presence is priceless." },
  "AT-05": { name: "Sumit", intro: "Fun in every moment.", note: "Thanks for all the laughs." },
  "AT-06": { name: "Friend6", intro: "Intro here.", note: "Note here." },
  "AT-07": { name: "Friend7", intro: "Intro here.", note: "Note here." },
  "AT-08": { name: "Friend8", intro: "Intro here.", note: "Note here." },
  "AT-09": { name: "Friend9", intro: "Intro here.", note: "Note here." },
  "AT-10": { name: "Friend10", intro: "Intro here.", note: "Note here." },
  "AT-11": { name: "Friend11", intro: "Intro here.", note: "Note here." },
  "AT-12": { name: "Friend12", intro: "Intro here.", note: "Note here." }
};

// -------------------- MODAL LOGIC --------------------
openModal.addEventListener("click", () => { modal.style.display = "flex"; });
closeModal.addEventListener("click", () => { modal.style.display = "none"; errorMsg.textContent = ""; });
window.addEventListener("click", (e) => { if(e.target === modal){ modal.style.display = "none"; errorMsg.textContent=""; } });

// -------------------- UNLOCK BUTTON --------------------
submitBtn.addEventListener("click", () => {
    const codeInput = document.getElementById("codeInput").value.trim().toUpperCase();

    if(friends[codeInput]){
        const data = friends[codeInput];

        // Hide modal and home container
        modal.style.display="none";
        document.querySelector(".container").style.display="none";

        // Show friend details
        friendName.textContent = data.name;
        friendMemory.textContent = data.intro;
        friendNote.textContent = data.note;

        // Clear previous cards
        cardsContainer.innerHTML="";

        // Automatically load images from /images folder
        for(let i=1; i<=20; i++){ // max 20 images per friend
            const imgPath = `images/${codeInput}-${i}.jpg`;
            fetch(imgPath).then(res=>{
                if(res.ok){
                    const div = document.createElement("div");
                    div.className = "memory-card reveal";
                    div.innerHTML = `<img src="${imgPath}" alt="Memory Photo"><p></p>`;
                    cardsContainer.appendChild(div);
                }
            });
        }

        personalSection.style.display="flex";

    } else {
        errorMsg.textContent="Invalid code. Try again.";
    }
});

// -------------------- BACK BUTTON --------------------
backBtn.addEventListener("click", () => {
    personalSection.style.display="none";
    document.querySelector(".container").style.display="flex";
});

// -------------------- SCROLL REVEAL --------------------
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el=>{
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if(elementTop < windowHeight - elementVisible){
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
