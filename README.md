# PasswordGenerate - Verificador e Gerador de Senhas Seguras

## Descrição

A ideia inicial seria elaborar um projeto voltado a segurança da informação, com isso pensei em desenvolver a aplicação PasswordGenerate, que foi desenvolvida durante a disciplina Engenharia de Software II para demonstrar ao usuário a força de sua senha e também gerar uma senha conforme a quantidade de caracteres que o usuário preferir. Ressalva, que o tamanho recomendado para garantir a segurança da senha, é definir 12 caracteres.

1. **Verificação de Senhas**: Permite que os usuários verifiquem a força de suas senhas e identifiquem se elas são comuns ou fracas. A aplicação utiliza uma lista de senhas comuns para comparar com a senha inserida pelo usuário e fornece feedback sobre a segurança da senha.

2. **Geração de Senhas**: Auxilia os usuários na criação de senhas fortes e seguras, que atendem a critérios específicos de comprimento, complexidade e diversidade de caracteres.

## Tecnologias Utilizadas

- Electron: Framework para criar aplicações de desktop com tecnologias web (HTML, CSS, JavaScript).
- JavaScript: Lógica de programação da aplicação.
- HTML/CSS: Estrutura e estilização da interface gráfica.

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
  
## Observações importantes

- **Verificação de Senha:** A funcionalidade de verificação de senha, faz a validação de uma senha gerada e verifica se atende aos critérios de segurança, não está funcionando corretamente quando o projeto é executado como uma aplicação web. Isso ocorre porque o Electron precisa ser empacotado e executado como uma aplicação desktop para acessar certas funcionalidades locais e realizar a verificação de forma apropriada.

- **Hospedagem:** Este projeto é desenvolvido com o Electron, uma tecnologia que permite criar aplicativos de desktop. Isso significa que a aplicação não pode ser hospedada diretamente no GitHub Pages, pois o Electron requer um ambiente que suporte o uso de Node.js e recursos nativos do sistema operacional.

### Como Rodar Localmente

Para executar o aplicativo em sua máquina, siga o passo a passo abaixo:

Clonar o repositório:

```bash
git clone https://github.com/ViniciusH97/PasswordGenerate.git
```

Instalar as dependências: No diretório do projeto, execute:

```bash
npm install
```

Rodar o aplicativo: Após instalar as dependências, execute o seguinte comando para iniciar o aplicativo Electron:

```bash
npm start
```

### Considerações Finais

Caso queira rodar este projeto localmente em seu computador, siga as etapas acima.
Agradeço pela compreensão!