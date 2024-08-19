document.addEventListener('DOMContentLoaded', () => {
  window.checkPassword = function () {
    var password = document.getElementById("passwordCheck").value;
    var strengthBadge = document.getElementById("passwordStrength");

    var strength = '';
    var UpperCase = /[A-Z]/.test(password);
    var LowerCase = /[a-z]/.test(password);
    var Number = /\d/.test(password);
    var SpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    var Spaces = /\s/.test(password);
    var tip = '';

    window.electron.getCommonPasswords().then(commonPasswords => {
      if (commonPasswords.includes(password)) {
        strength = 'fraca';
        tip = 'Senha comum, esta senha pode ser descoberta instantâneamente';
      } else if (Spaces) {
        strength = 'fraca';
        tip = 'A senha não deve conter espaços para maior segurança';
      } else if (password.length < 8) {
        strength = 'fraca';
        tip = 'Senha muito curta, tente aumentar o comprimento da senha';
      } else if (!UpperCase || !LowerCase || !Number || !SpecialChar) {
        strength = 'média';
        tip = (password.length < 12) ? 'Senha média, acrescente mais caracter na senha' : 'Senha média, esta senha pode ser descoberta em algumas horas';
      } else {
        strength = 'forte';
        tip = 'Senha forte, esta senha é segura para uso, e ela demoraria anos para ser descoberta';
      }

      strengthBadge.className = '';
      strengthBadge.classList.add('password-strength-' + strength);
      strengthBadge.innerHTML = `Força da Senha: ${strength.charAt(0).toUpperCase() + strength.slice(1)}<br>${tip}`;
    });
  }

  window.GeneratePassword = function () {
    var length = parseInt(document.getElementById("passwordLength").value, 10);
    if (isNaN(length) || length <= 0) length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(),.?\":{}|<>";
    var password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log('Generated Password:', password);
    document.getElementById("generatedPassword").value = password;
  }
});
