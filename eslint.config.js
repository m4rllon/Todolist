module.exports = {
    root: true, // Indica que este é o arquivo de configuração raiz do ESLint
    env: {
        browser: true, // Habilita variáveis globais que são comuns em navegadores (ex: window, document)
        es2021: true, // Habilita recursos do ES2021
        node: true, // Habilita variáveis globais do Node.js
    },
    extends: [
        'eslint:recommended', // Extende as regras recomendadas pelo ESLint
        'plugin:react/recommended', // Extende as regras recomendadas pelo plugin do React
        'plugin:@typescript-eslint/recommended', // Extende as regras recomendadas para TypeScript (se você usar TypeScript)
        'prettier', // Integração com Prettier para formatação de código
    ],
    parserOptions: {
        ecmaVersion: 12, // Define a versão ECMAScript que você está usando
        sourceType: 'module', // Permite o uso de import/export
        ecmaFeatures: {
            jsx: true, // Habilita o suporte para JSX
        },
    },
    plugins: [
        'react', // Habilita o plugin do React
        '@typescript-eslint', // Habilita o plugin para TypeScript (se você usar TypeScript)
    ],
    rules: {
        'react/react-in-jsx-scope': 'off', // Desativa a regra que requer 'React' em escopo com JSX (não é necessário no React 17+)
        'react/prop-types': 'off', // Desativa a regra que exige prop-types (útil se você estiver usando TypeScript)
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Desativa a regra que exige a definição do tipo de retorno em funções
        'no-unused-vars': 'warn', // Gera um aviso ao invés de erro para variáveis não utilizadas
        'no-console': 'warn', // Gera um aviso ao invés de erro para logs no console
        'prettier/prettier': [
            'error',
            {
                singleQuote: true, // Usa aspas simples
                semi: true, // Adiciona ponto e vírgula ao final das linhas
                trailingComma: 'es5', // Usa vírgula após o último item em listas de arrays ou objetos (onde possível)
            },
        ],
    },
    settings: {
        react: {
            version: 'detect', // Detecta automaticamente a versão do React que está sendo usada
        },
    },
};
