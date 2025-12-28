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
// Replace names, intros, notes, cards for your friends
const friends = {
  "AT-01": {
    name: "Ayushman",
    intro: "Some memories don’t need photos. They live in laughs, late talks, and shared silences.",
    note: "You were never just a friend. You became family.",
    cards: [
      { img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70", text: "That random day which became unforgettable." },
      { img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", text: "Laughs that never needed a reason." }
    ]
  },
  "AT-02": {
    name: "Ritika",
    intro: "From strangers to a constant presence.",
    note: "Thank you for always being there.",
    cards: [
      { img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7", text: "Moments that shaped us." }
    ]
  },
  "AT-03": {
    name: "Kritika",
    intro: "A friend who lights up every room.",
    note: "So happy we met by chance.",
    cards: [
      { img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131", text: "Funny trip memories." }
    ]
  },
  "AT-04": { name: "Prachi", intro: "Always there with a smile.", note: "Your presence is priceless.", cards: [] },
  "AT-05": { name: "Sumit", intro: "Every moment is fun with you.", note: "Thanks for the laughs!", cards: [] },
  "AT-06": { name: "Friend6", intro: "Intro here", note: "Note here", cards: [] },
  "AT-07": { name: "Friend7", intro: "Intro here", note: "Note here", cards: [] },
  "AT-08": { name: "Friend8", intro: "Intro here", note: "Note here", cards: [] },
  "AT-09": { name: "Friend9", intro: "Intro here", note: "Note here", cards: [] },
  "AT-10": { name: "Friend10", intro: "Intro here", note: "Note here", cards: [] },
  "AT-11": { name: "Friend11", intro: "Intro here", note: "Note here", cards: [] },
  "AT-12": { name: "Friend12", intro: "Intro here", note: "Note here", cards: [] }
};

// -------------------- MODAL LOGIC --------------------
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  errorMsg.textContent = "";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    errorMsg.textContent = "";
  }
});

// -------------------- UNLOCK BUTTON --------------------
submitBtn.addEventListener("click", () => {
  let codeInput = document.getElementById("codeInput").value.trim().toUpperCase(); // Case-insensitive

  if (friends[codeInput]) {
    const data = friends[codeInput];

    // Hide modal & home container
    modal.style.display = "none";
    document.querySelector(".container").style.display = "none";

    // Show personal section
    friendName.textContent = data.name;
    friendMemory.textContent = data.intro;
    friendNote.textContent = data.note;

    // Clear previous cards
    cardsContainer.innerHTML = "";

    // Add memory cards
    data.cards.forEach(card => {
      const div = document.createElement("div");
      div.className = "memory-card reveal";
      div.innerHTML = `<img src="${card.img}" alt="Memory Photo"><p>${card.text}</p>`;
      cardsContainer.appendChild(div);
    });

    personalSection.style.display = "flex";

  } else {
    errorMsg.textContent = "Invalid code. Try again.";
  }
});

// -------------------- BACK BUTTON --------------------
backBtn.addEventListener("click", () => {
  personalSection.style.display = "none";
  document.querySelector(".container").style.display = "flex";
});
