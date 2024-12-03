export default [
  {
    env: {
      browser: true,
      es2021: true,
      node: true, // Habilita o ambiente Node.js
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended', // Regras específicas do React
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module', // Suporte para import/export
    },
    rules: {
      // Adicione regras adicionais, se necessário
    },
  },
];
