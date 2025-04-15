function checkPassword() {
    const pwd = document.getElementById('password').value;
    let strength = 'Weak';
  
    if (pwd.length >= 12 && /[A-Z]/.test(pwd) && /\W/.test(pwd)) {
      strength = 'Strong 💪';
    } else if (pwd.length >= 8) {
      strength = 'Medium 🔐';
    }
  
    document.getElementById('result').textContent = `Strength: ${strength}`;
  }
  
  const tips = [
    "Use a password manager to generate and store passwords.",
    "Never reuse the same password across sites.",
    "Enable two-factor authentication (2FA) wherever possible.",
    "Be cautious of suspicious email links.",
    "Update your software and apps regularly.",
  ];
  
  document.getElementById('dailyTip').textContent =
    tips[Math.floor(Math.random() * tips.length)];

    const quizEmails = [
        { text: "You’ve won a free iPhone! Click here to claim your prize!", isPhishing: true },
        { text: "Amazon: Your order has been shipped!", isPhishing: false },
        { text: "Urgent: Your account has been compromised. Click to reset your password.", isPhishing: true },
        { text: "Netflix: Your subscription is about to expire. Renew now.", isPhishing: false },
        { text: "PayPal: Someone tried to log into your account. Verify your identity now.", isPhishing: true },
      ];
       // Display the quiz questions
const quizContainer = document.getElementById('quiz');
quizEmails.forEach((email, index) => {
  const emailButton = document.createElement('button');
  emailButton.textContent = email.text;
  emailButton.onclick = () => handleAnswer(email.isPhishing, index);
  quizContainer.appendChild(emailButton);
});

// Handle answer selection
function handleAnswer(isPhishing, index) {
  const feedback = document.getElementById('quizFeedback');
  if (isPhishing) {
    feedback.textContent = `Question ${index + 1}: Correct! This was a phishing email.`; 
    feedback.style.color = 'green';
  } else {
    feedback.textContent = `Question ${index + 1}: Incorrect. This was a legit email.`;
    feedback.style.color = 'red';
  }
}
  