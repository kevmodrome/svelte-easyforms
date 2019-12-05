<script>
  import { values } from "./stores/values.js";
  import { errors } from "./stores/errors.js";
  import { touched } from "./stores/touched.js";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Input from "./components/Input.svelte";
  import Button from "./components/Button.svelte";

  export let inputs = [];
  export let buttonText = "SUBMIT";
  export let resetText = "RESET";
  export let reset;

  let formFields = {};

  let updateFormField = (form, field, value) => {
    form = { ...form, [field]: value };
    return form;
  };

  const handleInputEvent = e => {
    formFields = updateFormField(formFields, e.detail.name, e.detail.value);
  };

  const resetForm = () => {
    values.reset();
    errors.reset();
    touched.reset();
  };
</script>

<style lang="scss">
  form {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  span {
    font-size: 20px;
    font-family: "Work Sans";
    font-weight: bold;
  }
  .button-container {
    margin-top: 10px;
    display: grid;
    grid-gap: 15px;
    grid-column: -1 / 1;
  }
</style>

<form action="">
  {#each inputs as input}
    <Input on:change={handleInputEvent} {...input} />
  {/each}
  <div class="button-container">
    <Button primary click={() => dispatch('submit', formFields)}>
      <span>{buttonText}</span>
    </Button>
    {#if reset}
      <Button primaryOutline click={resetForm}>
        <span>{resetText}</span>
      </Button>
    {/if}
  </div>
</form>

<h3>Values</h3>
<pre>{JSON.stringify($values, null, 2)}</pre>
<h3>Touched</h3>
<pre>{JSON.stringify($touched, null, 2)}</pre>
<h3>Errors</h3>
<pre>{JSON.stringify($errors, null, 2)}</pre>
