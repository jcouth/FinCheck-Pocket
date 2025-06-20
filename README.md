# FinCheck Pocket

> Aplicativo mobile para controle de transações financeiras, com suporte offline e autenticação biométrica.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## Índice

- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Comandos Úteis](#comandos-úteis)
- [Padrões de Código](#padrões-de-código)
- [Contribuindo](#contribuindo)
- [CHANGELOG](#changelog)
- [Licença](#licença)

## Tecnologias

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) para testes unitários
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) para padronização de código
- [Husky](https://typicode.github.io/husky) + [lint-staged](https://github.com/okonet/lint-staged) para hooks de git
- [Commitlint](https://commitlint.js.org/) para convenção de commits

## Instalação

```bash
git clone https://github.com/jcouth/FinCheck-Pocket.git
cd FinCheck-Pocket
yarn install

# iOS
cd ios && pod install
```

## Comandos Úteis

```bash
# Iniciar app - Android
yarn android

# Iniciar app - iOS
yarn ios

# Rodar testes unitários
yarn test
yarn test:watch
yarn test:coverage

# Rodar linter + prettier
yarn lint
yarn lint:fix
yarn prettier

# Reset cache
yarn start --reset-cache
```

## Padrões de Código

- O projeto segue [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) para garantir qualidade e formatação consistente.
- **Commits** seguem o padrão [Conventional Commits](https://www.conventionalcommits.org/). Commits fora do padrão são bloqueados.
- **Hooks de pré-commit** automatizam lint, prettier e testes nos arquivos alterados.
- Recomenda-se usar as extensões sugeridas do VSCode presentes em `.vscode/extensions.json`.

## Contribuindo

1. Abra um fork do projeto.
2. Crie uma branch com sua feature/fix.
3. Siga os padrões de commit (commitlint/conventional commits).
4. Rode `yarn lint` e `yarn test` antes do PR.
5. Faça PR para o branch `main` e aguarde revisão.

## CHANGELOG

O histórico completo de alterações e versões é mantido no arquivo [CHANGELOG.md](CHANGELOG.md).
As versões são geradas automaticamente a partir dos commits seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/) com auxílio da ferramenta [standard-version](https://github.com/conventional-changelog/standard-version).

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
