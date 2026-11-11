
const demoForm = document.querySelector("#demo-form");
const formResult = document.querySelector("#form-result");

if (demoForm && formResult) {
    demoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formResult.textContent =
            "Formulář byl úspěšně vyzkoušen. Žádná data nebyla odeslána.";
    });

    demoForm.addEventListener("reset", function () {
        formResult.textContent = "";
    });
}
