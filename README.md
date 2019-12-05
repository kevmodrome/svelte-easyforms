# svelte-easyforms

A very opinionated form library for Svelte. Currently only supports inputs and textarea.

Usage:

```javascript
import Form from "svelte-easyforms";

const emailValidator = value =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );

const inputs = [
  {
    name: "name",
    title: "Who are you ?",
    placeholder: "Name, company, etc..."
  },
  {
    name: "email",
    title: "What's your email?",
    placeholder: "Email...",
    type: "email",
    validator: emailValidator
  },
  {
    name: "message",
    title: "Your message",
    placeholder: "Write your message here...",
    full: true,
    multiline: true
  }
];

const submitForm = e => {
  console.log("submitForm");
};
```

And your HTML:

```html
<form {inputs} buttonText="SEND MESSAGE" on:submit="{submitForm}" reset />
```

Options:
Each input object takes a couple of options

- name
- initialValue
- title (shows up above the input)
- placeholder
- type (defaults to "text")
- validator (optional, should return true if the value passes)
- multiline (optional, turns input into textarea)
- full (optional, makes the field span the whole form, instead of half)
- errorMessage (optional, shows up if there is an error)
- textareaHeight (optional, used with multiline, specifies how large the textarea field should be to begin with)
- font (optional, specifies font)

The Form itself takes a number of props:

- inputs (an array of inputs)
- buttonText (optional)
- reset (optional, makes the resetbutton appear)
- resetText (optional, changes the text on the reset button)
- debug (optional, displays the values, touched and errors objects)

```bash
npx degit sveltejs/component-template my-new-component
cd my-new-component
npm install # or yarn
```

Your component's source code lives in `src/index.svelte`.

TODO

- [ ] some firm opinions about the best way to test components
- [ ] update `degit` so that it automates some of the setup work

## Setting up

- Run `npm init` (or `yarn init`)
- Replace this README with your own

## Consuming components

Your package.json has a `"svelte"` field pointing to `src/index.svelte`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`index.mjs`) and a UMD script (`index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.
