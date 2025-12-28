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

// FRIEND DATA: personalize names, notes, cards here
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
  }
};

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

submitBtn.addEventListener("click", () => {
  const codeInput = document.getElementById("codeInput").value.trim();

  if (friends[codeInput]) {
    const data = friends[codeInput];

    modal.style.display = "none";
    document.querySelector(".container").style.display = "none";

    friendName.textContent = data.name;
    friendMemory.textContent = data.intro;
    friendNote.textContent = data.note;

    // Clear existing cards
    cardsContainer.innerHTML = "";

    // Add cards
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

backBtn.addEventListener("click", () => {
  personalSection.style.display = "none";
  document.querySelector(".container").style.display = "flex";
});
