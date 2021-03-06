<script>
  import { onMount } from "svelte";
  import { values } from "../stores/values.js";
  import { errors } from "../stores/errors.js";
  import { touched } from "../stores/touched.js";
  import { autoresize } from "../actions/autoresize.js";

  export let placeholder = "";
  export let full = false;
  export let name = "";
  export let type = "text";
  export let initialValue = "";
  export let title = "";
  export let validator = () => true;
  export let errorMessage = "";
  export let multiline;
  export let textareaHeight = "150px";
  export let font = "Verdana";

  onMount(() => {
    values.updateValue(name, initialValue);
    errors.updateError(name, !validator(initialValue));
    touched.updateTouched(name, false);
  });

  function onChange(event) {
    values.updateValue(name, event.target.value);
    errors.updateError(name, !validator(event.target.value));
  }
  function onBlur(event) {
    values.updateValue(name, event.target.value);
    touched.updateTouched(name);
  }

  $: errors.updateError(name, !validator($values[name]));
</script>

<style>
  label {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr;
  }
  input,
  textarea {
    box-sizing: border-box;
    border: 4px solid #cdd7d6;
    border-radius: 10px;
    outline: none;
    font-size: 15px;
    padding: 15px;
  }
  input::placeholder,
  textarea::placeholder {
    font-style: bold;
    color: rgba(0, 0, 0, 0.4);
  }
  input:focus,
  textarea:focus {
    border: 4px solid #140f2d;
  }
  .full {
    grid-column: -1 / 1;
  }
  .error {
    border: 4px solid red;
  }
  .error-container {
    font-size: 10px;
    color: red;
  }
</style>

<label class:full style="font-family: {font}">
  {title}
  {#if multiline}
    <div style="min-height: {textareaHeight}">
      <textarea
        style="min-height: {textareaHeight}; font-family: {font}"
        on:keyup={onChange}
        on:change={onChange}
        on:blur={onBlur}
        value={$values[name] || initialValue}
        class:error={$errors[name] && $touched[name]}
        {name}
        {placeholder}
        use:autoresize />
    </div>
  {:else}
    <input
      style="font-family: {font}"
      {type}
      {name}
      {placeholder}
      value={$values[name] || initialValue}
      on:keyup={onChange}
      on:change={onChange}
      on:blur={onBlur}
      class:error={$errors[name] && $touched[name]} />
  {/if}
  {#if $errors[name] && $touched[name] && errorMessage}
    <div class="error-container">{errorMessage}</div>
  {/if}
</label>
