



const buttons = document.querySelectorAll("[data-section-id]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const idOfTheSection = button.dataset.sectionId;
    const section = document.getElementById(idOfTheSection);
    section.dataset.activeSection = ("true");
  })
})

const buttons2 = document.querySelectorAll("[data-modal-id]")

buttons2.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modalId
    const modal = document.getElementById(modalId)
    
  })
})