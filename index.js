const translate_button = document.getElementById("translate_button");
const form_card = document.getElementById("lower_body__content_card");
const lower_body = document.getElementById("lower_body");
const answer_card = document.getElementById("answer_card");
const answer_text_original = document.querySelector(".answer_text_original");
const answer_card__content_ans = document.querySelector(".answer_card__content_ans");
const start_over_btn = document.getElementById("start_over_btn");


let originalText 

form_card.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = e.target.translate_text_input.value
    const targetLanguage = e.target.language.value
    originalText = text;
    const response = await fetch("http://localhost:3000/translate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text,
            targetLanguage
        })
    });

    const data = await response.json();

    if (data) {




        lower_body.style.display = "none";
        answer_card.style.display = "flex";
        answer_text_original.textContent = originalText;
        answer_card__content_ans.textContent = data.translatedText;

        start_over_btn.addEventListener("click", () => {
            lower_body.style.display = "flex";
            answer_card.style.display = "none";
            form_card.reset();
        });
    }

});

