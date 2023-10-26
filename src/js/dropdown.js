const faqItem = document.querySelectorAll(".faqs-item");
const arrow = document.querySelectorAll(".drop-arrow");
const answer = document.querySelectorAll(".answer");

let activeArrow;
let activeAnswer;

faqItem.forEach((element, index) =>
  element.addEventListener("click", () => {
    if (arrow[index].className != "drop-arrow active") {
      arrow[index].classList.toggle("active");
      answer[index].classList.add("active");

      activeArrow = index;
      activeAnswer = index;

      for (let i = 0; i < answer.length; i++) {
        if (answer[i] != answer[activeAnswer]) {
          arrow[i].classList.remove("active");
          answer[i].classList.remove("active");
        }
      }
    } else {
      arrow[index].classList.remove("active");
      answer[index].classList.remove("active");
    }
  })
);
