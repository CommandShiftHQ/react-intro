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

### 05 - State

1. Import useState hook at the beginning of `Dropdown.js` file.
   `import React, {useState} from 'react';`
2. Replace static `isOpen` const to state with `useState` hook, with initial value of false.
   `const [isOpen, setIsOpen] = useState(false);`
3. Add `onClick` prop to attach event listener to `<button>` in `<Dropdown />`. Set value of this prop to `() => setIsOpen(!isOpen)`. Now `<Dropdown />` should be opening and closing when you clock on the button.
   `<button className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>`
4. To register which option of the `<Dropdown />` has been selected button:

- Add `useState` hook for `selectedValue`.
  `const [selectedValue, setSelectedValue] = useState(null);`
- Add `id` property to each option stored in `dropdown`. Currently stored value assign to `label` property, for example:
  `{ id: 1, label: 'option 1' }`
- Refactor `<li>`s so `key` prop will store option `id` value: `key={option.id}`.
- Add `onClick` prop to attach event listener to each `<li>` with value of `() => setSelectedValue(option.id)`.
- Create `getSelectedOption` const where value would be entire selected `option` object, as per example above. You can that object with `find()` method where you can compare `option.id` of each option with `selectedValue`.

5. To display selected option on the `<Dropdown />` button:

- Add `getDropdownTitle` with a value of either `title` prop and "title - [selected option label]", depending what value `selectedOption` holds (either null or a value).
- Replace usage of `title` in the button to `getDropdownTitle`.

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
