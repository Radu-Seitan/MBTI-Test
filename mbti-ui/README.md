## Description

The project starts out light and it includes multiple configurations for the main parts in order to have a working web app. This includes Webpack, Babel, routing, state management with [react-redux](https://react-redux.js.org/introduction/getting-started) and [react-saga](https://redux-saga.js.org/docs/introduction/GettingStarted) and standardized by [redux toolkit](https://redux-toolkit.js.org/introduction/getting-started).

## Requirements

- NodeJS (preferable 16+)
- [Yarn](https://yarnpkg.com/getting-started/migration) (preferable Yarn 2 Berry)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-6.html) (preferable 4.6+)

## Installation and run

1. `git clone` this repo
2. Install packages
3. Run start:dev
```shell
$ yarn install

$ yarn start:dev
```

4. You can also run the command `yarn start:test` to run the app in production mode and if you need to build for different environments you have this option as well `--mode:production`. There is an **.env** file present in the repository.

## Stack

- React
- TypeScript
- React router
- React i18next
- Date fns
- Lodash
- Redux saga
- Redux toolkit
- MUI Material
- Yup
- Formik
- Redux-persist



## Inside the app

The UI library being used is [MUI](https://mui.com/). This offers great flexibility and has plenty of support.

The preferred way of installing and using the package is yarn, _which is faster, cleaner and more stable than npm_.

The Initial version of React RnD - Nro boilerplate is for English (both US and GB sub locales), but any number of languages can be later added.

To showcase best practices with our demo application, some functionalities have been implemented for your convenience. To enumerate a few we have: routing, login, grids, api calls, language selector, form validations. 

The container design pattern has been used.


