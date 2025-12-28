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

// FRIEND DATA
const friends = {
  "AT-01": {
    name: "Nimish",
    intro: "Some memories don’t need photos. They live in feelings.",
    note: "You were never just a friend. You became family.",
    cards: [
      {
        img: "images/friend1.jpg",
        text: "That random day which became unforgettable."
      },
      {
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        text: "Laughs that never needed a reason."
      }
    ]
  },
  "AT-02": {
    name: "Friend Two",
    intro: "From strangers to a constant presence.",
    note: "Thank you for always being there.",
    cards: [
      {
        img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        text: "Moments that shaped us."
      }
    ]
  }
};

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", closeAll);

backBtn.addEventListener("click", () => {
  personalSection.style.display = "none";
  document.querySelector(".container").style.display = "flex";
});

function closeAll() {
  modal.style.display = "none";
  errorMsg.textContent = "";
}

submitBtn.addEventListener("click", () => {
  const code = document.getElementById("codeInput").value.trim();

  if (friends[code]) {
    const data = friends[code];

    modal.style.display = "none";
    document.querySelector(".container").style.display = "none";

    friendName.textContent = data.name;
    friendMemory.textContent = data.intro;
    friendNote.textContent = data.note;

    cardsContainer.innerHTML = "";
    data.cards.forEach(card => {
      const div = document.createElement("div");
      div.className = "memory-card";
      div.innerHTML = `
        <img src="${card.img}">
        <p>${card.text}</p>
      `;
      cardsContainer.appendChild(div);
    });

    personalSection.style.display = "flex";
  } else {
    errorMsg.textContent = "Invalid code. Try again.";
  }
});

