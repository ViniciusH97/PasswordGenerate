# SecurePass - Verificador e Gerador de Senhas Seguras

## Descrição

**SecurePass** é uma aplicação desenvolvida para ajudar a comunidade a gerenciar a segurança de suas senhas. O projeto oferece duas funcionalidades principais:

1. **Verificação de Senhas**: Permite que os usuários verifiquem a força de suas senhas e identifiquem se elas são comuns ou fracas. A aplicação utiliza uma lista de senhas comuns para comparar com a senha inserida pelo usuário e fornece feedback sobre a segurança da senha.

2. **Geração de Senhas Seguras**: Auxilia os usuários na criação de senhas fortes e seguras, que atendem a critérios específicos de comprimento, complexidade e diversidade de caracteres. 

## Funcionalidades

- **Verificador de Senhas**: Avalia a força da senha baseada em:
  - Comprimento da senha.
  - Presença de caracteres especiais.
  - Inclusão de letras maiúsculas e minúsculas.
  - Presença de números.
  - Verificação contra uma lista de senhas comuns.

- **Gerador de Senhas**: Gera senhas aleatórias com base em critérios definidos para garantir a segurança e a robustez das senhas criadas.

## Como Funciona

1. **Verificação de Senhas**:
   - O usuário insere uma senha em um campo de texto.
   - A aplicação verifica se a senha está presente em uma lista de senhas comuns.
   - A força da senha é avaliada e exibida ao usuário, indicando se a senha é fraca, média ou forte.

2. **Geração de Senhas**:
   - O usuário pode solicitar a geração de uma nova senha.
   - A aplicação gera uma senha que atende aos critérios de segurança e exibe ao usuário.

## Tecnologias Utilizadas

- **Electron**: Plataforma para criar aplicações desktop usando tecnologias web.
- **JavaScript**: Linguagem de programação para lógica de aplicação e verificação de senha.
- **HTML/CSS**: Estrutura e estilo da interface do usuário.
- **Bootstrap**: Framework para estilização responsiva e moderna.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   https://github.com/ViniciusH97/PasswordGenerate.git
