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

  const handleSubmit = () => {
    const numberOfErrors = Object.keys($errors).filter(key => $errors[key]);
    const fieldsNotTouched = Object.keys($touched).filter(
      key => !$touched[key]
    );

    if (numberOfErrors.length === 0 && fieldsNotTouched.length === 0) {
      console.log("SUBMITTING!");
      resetForm();
    } else {
      console.log("Not submitting!");
    }
  };

  const resetForm = () => {
    inputs.forEach(input => {
      values.updateValue(input.name);
    });
    inputs.forEach(input => {
      touched.updateTouched(input.name, false);
    });
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
    <Input {...input} />
  {/each}
  <div class="button-container">
    <Button primary click={handleSubmit}>
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
