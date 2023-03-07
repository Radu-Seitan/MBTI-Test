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

A more comprehensive list of all the necessary packages can be found in the [package.json](https://gitlab.netrom.live/netrom/boilerplates/react/-/blob/master/package.json) file.


## Inside React RnD - Nro boilerplate

The UI library being used is [MUI](https://mui.com/). This offers great flexibility and has plenty of support.

The preferred way of installing and using the package is yarn, _which is faster, cleaner and more stable than npm_.

The Initial version of React RnD - Nro boilerplate is for English (both US and GB sub locales), but any number of languages can be later added.

To showcase best practices with our demo application, some functionalities have been implemented for your convenience. To enumerate a few we have: routing, login, grids, api calls, language selector, form validations.

These were also useful to present the project structure which can be found [here](https://gitlab.netrom.live/netrom/boilerplates/react/-/blob/master/.README-Files/app-skeleton.md). The container design pattern has been used.

As React is just a frontend UI library it cannot work by itself. React works best with these [well maintained libraries](https://gitlab.netrom.live/netrom/boilerplates/react/-/blob/master/.README-Files/app-skeleton.md).

## Examples and Honorable mentions

* ### [Date-FNS](https://gitlab.netrom.live/netrom/boilerplates/react/-/blob/master/.README-Files/date-fns.md)
* ### [Internationalization](https://gitlab.netrom.live/netrom/boilerplates/react/-/blob/master/.README-Files/i18next.md)
* ### [Formatting](https://gitlab.netrom.live/netrom/boilerplates/react/-/blob/master/.README-Files/prettier.md)
* ### [Redux toolkit store configuration](https://gitlab.netrom.live/netrom/boilerplates/react/-/blob/master/.README-Files/store-details.md)
* ### [TypeScript](https://gitlab.netrom.live/netrom/boilerplates/react/-/blob/master/.README-Files/typescript.md)
