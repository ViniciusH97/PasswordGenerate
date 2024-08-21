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
        tip = 'ATENÇÃO! Esta senha é muito comum, ela pode ser descoberta instantâneamente';
      } else if (Spaces) {
        strength = 'fraca';
        tip = 'ATENÇÃO! A senha não deve conter espaços para maior segurança';
      } else if (password.length < 8) {
        strength = 'fraca';
        tip = 'CUIDADO! Esta senha é muito curta, tente aumentar o comprimento da senha';
      } else if (!UpperCase || !LowerCase || !Number || !SpecialChar) {
        strength = 'média';
        tip = (password.length < 12) ? 'Cuidado! Acrescente mais caracteres na senha, esta senha pode ser descoberta em algumas horas' : 'Senha média, esta senha pode ser descoberta em algumas horas';
      } else {
        strength = 'forte';
        tip = 'Senha forte, esta senha é segura para uso, e ela demoraria meses ou até anos para ser descoberta';
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

  window.toggleTheme = function () {
    const body = document.getElementById('page');
    const themeIcon = document.getElementById('toggleThemeBtn').querySelector('i');
    const themeButton = document.getElementById('toggleThemeBtn');

    if (body.classList.contains('bg-dark')) {
      body.classList.remove('bg-dark', 'text-light');
      body.classList.add('bg-light', 'text-dark');

      themeButton.style.backgroundColor = '#ffffff';
      themeButton.style.color = '#000000';

      document.querySelectorAll('button').forEach(el => {
        el.style.backgroundColor = '#dddddd';
        el.style.color = '#000000';
      });

      document.querySelectorAll('a, li, .navbar-brand, h1, p, h3, footer p').forEach(el => {
        el.style.color = '#000000';
      });

      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      body.classList.remove('bg-light', 'text-dark');
      body.classList.add('bg-dark', 'text-light');

      themeButton.style.backgroundColor = '#000000';
      themeButton.style.color = '#ffffff';

      document.querySelectorAll('button').forEach(el => {
        el.style.backgroundColor = '#333333';
        el.style.color = '#ffffff';
      });

      document.querySelectorAll('a, li, .navbar-brand, h1, p, h3, footer p').forEach(el => {
        el.style.color = '#ffffff';
      });

      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }

});

