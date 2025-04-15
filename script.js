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
  