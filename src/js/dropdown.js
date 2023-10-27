const faqItem = document.querySelectorAll(".faqs-item");
const arrow = document.querySelectorAll(".drop-arrow");
const answer = document.querySelectorAll(".answer");

let activeFaqItem;
let activeArrow;
let activeAnswer;

faqItem.forEach((element, index) =>
  element.addEventListener("click", () => {
    if (arrow[index].className != "drop-arrow active") {
      faqItem[index].classList.toggle("active");
      arrow[index].classList.toggle("active");
      answer[index].classList.add("active");

      activeArrow = index;
      activeAnswer = index;
      activeFaqItem = index; 

      for (let i = 0; i < answer.length; i++) {
        if (answer[i] != answer[activeAnswer]) {
          faqItem[i].classList.remove("active"); 
          arrow[i].classList.remove("active");
          answer[i].classList.remove("active");
        }
      }
      
    } else {
      faqItem[index].classList.remove("active")
      arrow[index].classList.remove("active");
      answer[index].classList.remove("active");
    }
  })
);
