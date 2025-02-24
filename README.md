# PasswordGenerate - Verificador e Gerador de Senhas Seguras

## Descrição

A ideia inicial seria elaborar um projeto voltado a segurança da informação, com isso pensei em desenvolver a aplicação PasswordGenerate, que foi desenvolvida durante a disciplina Engenharia de Software II para demonstrar ao usuário a força de sua senha e também gerar uma senha conforme a quantidade que o usuário preferir. Lembrando que o tamanho recomendado para garantir a segurança é acima de 12 caracteres.

1. **Verificação de Senhas**: Permite que os usuários verifiquem a força de suas senhas e identifiquem se elas são comuns ou fracas. A aplicação utiliza uma lista de senhas comuns para comparar com a senha inserida pelo usuário e fornece feedback sobre a segurança da senha.

2. **Geração de Senhas**: Auxilia os usuários na criação de senhas fortes e seguras, que atendem a critérios específicos de comprimento, complexidade e diversidade de caracteres. 

## Funcionalidades

- **Verificador de Senhas**: Avalia a força da senha baseada em:
  - Comprimento da senha.
  - Presença de caracteres especiais.
  - Inclusão de letras maiúsculas e minúsculas.
  - Presença de números.
  - Verificação com uma lista de senhas comuns.

- **Gerador de Senhas**: Gera senhas aleatórias com base em critérios definidos para garantir a segurança e a robustez das senhas criadas.

## Como Funciona

1. **Verificação de Senhas**:
   - O usuário insere uma senha em um campo de texto.
   - A aplicação verifica se a senha está presente em uma lista de senhas comuns.
   - A força da senha é avaliada e exibida ao usuário, indicando se a senha é fraca, média ou forte.

2. **Geração de Senhas**:
   - O usuário pode solicitar a geração de uma nova senha.
   - A aplicação gera uma senha que atende aos critérios de segurança e exibe ao usuário.
