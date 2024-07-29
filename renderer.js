document.addEventListener('DOMContentLoaded', () => {
  window.electron.getCommonPasswords().then(passwords => {
    window.commonPasswords = passwords;
  });

  window.checkPassword = function () {
    var password = document.getElementById("password").value;
    var strengthBadge = document.getElementById("passwordStrength");

    var strength = '';
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    var hasSpaces = /\s/.test(password);

    if (window.commonPasswords.includes(password)) {
      strength = 'fraca';
    } else if (hasSpaces) {
      strength = 'fraca';
    } else if (password.length < 8) {
      strength = 'fraca';
    } else if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
      strength = 'média';
    } else if (password.length < 12) {
      strength = 'média';
    } else {
      strength = 'forte';
    }

    strengthBadge.className = '';
    strengthBadge.classList.add('password-strength-' + strength);
    strengthBadge.innerHTML = "Força da Senha: " + strength.charAt(0).toUpperCase() + strength.slice(1);
  };

});
