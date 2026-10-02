// ========================================
// ენის გადართვა
// ========================================

const kaButton = document.getElementById("kaBtn");
const enButton = document.getElementById("enBtn");

const georgianElements = document.querySelectorAll(".ka");
const englishElements = document.querySelectorAll(".en");


// ========================================
// ქართული ენა
// ========================================

function setGeorgian() {

    document.documentElement.lang = "ka";

    georgianElements.forEach(function(element) {
        element.classList.add("show");
    });

    englishElements.forEach(function(element) {
        element.classList.remove("show");
    });

    kaButton.classList.add("active");
    enButton.classList.remove("active");

    localStorage.setItem("selectedLanguage", "ka");
}


// ========================================
// ინგლისური ენა
// ========================================

function setEnglish() {

    document.documentElement.lang = "en";

    georgianElements.forEach(function(element) {
        element.classList.remove("show");
    });

    englishElements.forEach(function(element) {
        element.classList.add("show");
    });

    enButton.classList.add("active");
    kaButton.classList.remove("active");

    localStorage.setItem("selectedLanguage", "en");
}


// ========================================
// ენის ღილაკები
// ========================================

kaButton.addEventListener("click", function() {
    setGeorgian();
});


enButton.addEventListener("click", function() {
    setEnglish();
});


// ========================================
// შენახული ენის შემოწმება
// ========================================

const savedLanguage = localStorage.getItem("selectedLanguage");


if (savedLanguage === "en") {

    setEnglish();

} else {

    setGeorgian();

}


// ========================================
// საკონტაქტო ფორმა
// ========================================

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const currentLanguage =
            document.documentElement.lang;


        if (currentLanguage === "ka") {

            alert(
                "გმადლობთ! თქვენი შეტყობინება მიღებულია. 💜"
            );

        } else {

            alert(
                "Thank you! Your message has been received. 💜"
            );

        }


        contactForm.reset();

    });

}
