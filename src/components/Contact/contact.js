// ==========================================
// EMAILJS
// ==========================================

emailjs.init({
  publicKey: "x43BckbKVbwPB1ikp",
  blockHeadless: true,
  limitRate: {
    id: "contact-form",
    throttle: 10000,
  },
});

// ==========================================
// FORMULAIRE DE CONTACT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-button");
  const formStatus = document.getElementById("form-status");

  // Vérification
  if (!contactForm) {
    console.error("❌ Formulaire #contact-form introuvable.");
    return;
  }

  console.log("✅ Formulaire de contact chargé.");

  contactForm.addEventListener("submit", function (event) {
    // EMPÊCHE LE RECHARGEMENT DE LA PAGE
    event.preventDefault();

    console.log("📨 Tentative d'envoi...");

    // Vérification CAPTCHA
    const captchaResponse = grecaptcha.getResponse();

    if (!captchaResponse) {
      formStatus.textContent =
        "Veuillez confirmer que vous n'êtes pas un robot.";

      formStatus.className = "text-sm text-red-400";

      return;
    }

    // Désactivation du bouton
    submitButton.disabled = true;
    submitButton.textContent = "Envoi en cours...";

    formStatus.textContent = "";

    // Envoi EmailJS
    emailjs
      .sendForm("service_nz3q0xt", "template_ib8xjpc", contactForm)
      .then((response) => {
        console.log("✅ Email envoyé :", response.status, response.text);

        formStatus.textContent = "Message envoyé avec succès !";

        formStatus.className = "text-sm text-green-400";

        contactForm.reset();

        grecaptcha.reset();

        submitButton.disabled = false;
        submitButton.textContent = "Envoyer";
      })
      .catch((error) => {
        console.error("❌ EmailJS Error :", error);

        formStatus.textContent = "Une erreur est survenue. Veuillez réessayer.";

        formStatus.className = "text-sm text-red-400";

        grecaptcha.reset();

        submitButton.disabled = false;
        submitButton.textContent = "Envoyer";
      });
  });
});
