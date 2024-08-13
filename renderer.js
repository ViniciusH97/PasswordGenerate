document.addEventListener('DOMContentLoaded', () => {
  window.electron.getCommonPasswords().then(passwords => {
    window.commonPasswords = passwords;
    const path = window.location.pathname;
  });

  window.checkPassword = function () {
    var password = document.getElementById("password").value;
    var strengthBadge = document.getElementById("passwordStrength");

    var strength = '';
    var UpperCase = /[A-Z]/.test(password);
    var LowerCase = /[a-z]/.test(password);
    var Number = /\d/.test(password);
    var SpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    var Spaces = /\s/.test(password);
    var tip = '';

    if ( path.join(__dirname, 'index_pt-br.html')) {

      if (window.commonPasswords.includes(password)) {
        strength = 'fraca';
        tip = "A senha é muito comum. Ela pode ser descoberta por ataque de dicionário em questão de segundos";
      } else if (Spaces) {
        strength = 'fraca';
        tip = 'A senha possui espaços em branco. Remova-os para torna-la mais segura';
      } else if (password.length < 8) {
        strength = 'fraca';
        tip = 'A senha é fraca porque é muito curta. Acrescente mais caracteres acima de doze para torna-la mais segura';
      } else if (!UpperCase || !LowerCase || !Number || !SpecialChar) {
        strength = 'média';
        tip = 'Sua senha está com força média. Talvez demoraria algumas horas para descobri-la';
      } else if (password.length < 12) {
        strength = 'média';
        tip = 'Sua senha está com força média. Talvez demoraria algumas horas para descobri-la. Porém, a senha ainda está curta';
      } else {
        strength = 'forte';
        tip = 'Sua senha é forte. Ela demoraria dias, meses ou anos para descobri-la';
      }
    }
    else if( path.join(__dirname, 'index_en.html')) {
      
      if (window.commonPasswords.includes(password)) {
        strength = 'weak';
        tip = "The password is too common. It can be discovered by dictionary attack in seconds";
      } else if (Spaces) {
        strength = 'weak';
        tip = 'The password has spaces. Remove them to make it more secure';
      } else if (password.length < 8) {
        strength = 'weak';
        tip = 'The password is weak because it is too short. Add more characters above twelve to make it more secure';
      } else if (!UpperCase || !LowerCase || !Number || !SpecialChar) {
        strength = 'medium';
        tip = 'Your password is of medium strength. It might take a few hours to discover it';
      } else if (password.length < 12) {
        strength = 'medium';
        tip = 'Your password is of medium strength. It might take a few hours to discover it. However, the password is still short';
      } else {
        strength = 'strong';
        tip = 'Your password is strong. It might take days, months or years to discover it';
      }
    }

    strengthBadge.className = '';
    strengthBadge.classList.add('password-strength-' + strength);
    strengthBadge.innerHTML = "Força da Senha: " + strength.charAt(0).toUpperCase() + strength.slice(1);
  };

  window.GeneratePassword = function () {
    var length = 12,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(),.?\":{}|<>",
      password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("password").value = password;
    window.checkPassword();
  };

});
