<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# Список покупок

Простое учебное веб‑приложение для ведения списка покупок. Позволяет добавлять товары, отмечать их как купленные и удалять.

## Функционал
- Добавление новых товаров в список.
- Отображение всех товаров в списке.
- Отметка товаров как купленных (чекбокс, зачёркивание).
- Удаление товаров из списка.

## Технологии
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

## Установка и запуск
1. Склонируйте проект или создайте новый через Vite:
   ```bash
   npm create vite@latest shopping-list -- --template react-ts
   cd shopping-list
   npm install
   ```

2. Скопируйте содержимое `App.tsx` из этого репозитория в файл `src/App.tsx`.

3. Убедитесь, что в проекте присутствуют:
   - `index.html` (из шаблона Vite)
   - `src/main.tsx` (из шаблона Vite)

4. Запустите локальный сервер разработки:
   ```bash
   npm run dev
   ```

5. Откройте приложение в браузере по адресу, указанному в терминале (обычно `http://localhost:5173`).

## Приёмка
- Приложение запускается через `npm run dev`.
- Проверка функций: добавление, отметка «куплен», удаление.
- Корректная работа в актуальных версиях Chrome, Firefox, Edge.

---

📌 Проект минималистичный и легко расширяемый — можно добавить сохранение в `localStorage` или интеграцию с базой данных.
>>>>>>> 1653a20238162a8b97c922a1dde00f28f736d2d9
