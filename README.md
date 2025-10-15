# PNC Website

This is the repository for the PNC Website project built with React and Vite.

## Image Files

The repository includes most of the image files needed for the website. However, there are some JPG files in the `src/assets/` directory that may not be properly included in the repository due to file access issues:

- All `pnc*.jpg` files have been successfully added to the repository and will be available when cloned.
- The `com*.jpg` files are showing unusual behavior - they appear in directory listings but cannot be accessed or added to Git. This may be due to the future dates on these files (2025).

## Development Setup

This project uses Vite with React. Two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
