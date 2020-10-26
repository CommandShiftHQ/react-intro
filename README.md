# React Intro

## Objective

...

## Steps

### 01 - Pure Component

1. Create `components` directory in `src`
2. Create `<Header />` component in `components` dir. It should contain a heading and your name.
3. Use `<Header />` in `<App />`.

### 02 - Props

1. Add prop `name` to `<Header />`.
2. Build simple `<Dropdown />` component that will contain a button and list of options. Don't worry about hiding and revealing options, or styling it. We will do that later.
3. Add `title` and `options` props to `<Dropdown />`.
4. Check if you have any errors in the console ;) This [link](https://reactjs.org/docs/lists-and-keys.html#keys) might help you.

### 03 - Conditional rendering

1. Add const `isOpen` in `<Dropdown />` and set to `false`.
2. Render dropdown option only if `isOpen` is `true`. You don't have add any method changing a value of `isOpen`, we will deal with that later, but for know using `const` is enough.

### 04 - Props validation

1. Import `PropTypes` module.
2. Add props validation to `<Header />` and `<Dropdown />`. This [link](https://reactjs.org/docs/typechecking-with-proptypes.html) might help you.

## Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
