# svelte-easyforms

A very opinionated form library for Svelte. Currently only supports inputs and textarea.

[DEMO](https://svelte.dev/repl/d133210432dc47758674ac6a9233e370?version=3.16.0)

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

```javascript
<Form {inputs} buttonText="SEND MESSAGE" on:submit="{submitForm}" reset />
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

## TODO

- [ ] Add custom input functionality
- [ ] Add other types of form elements like radio buttons and checkboxes
- [ ] Add possibility to pass in more than one validator per input
- [ ] Make buttons slottable in order to let consumers pass in their own buttons
- [ ] Make styling more dynamic
