// geting all questions
const faq = document.querySelectorAll(".faqs");
// add listiner
faq.forEach((faqs) => {
  const faq_question = faqs.querySelector(".faq-head");
  faq_question.addEventListener("click", () => {
    faq.forEach((otherFaq) => {
        if (otherFaq !== faq_question) {
            otherFaq.querySelector(".faq-question").classList.remove('show-faq');
        }
    });
    const faq_answers = faqs.querySelector(".faq-question").classList.toggle("show-faq");
  });
});
