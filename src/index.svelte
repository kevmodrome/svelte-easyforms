<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Input from "./Input.svelte";
  import Button from "./Button.svelte";

  export let inputs = [];
  export let buttonText = "";

  let formFields = {};

  let updateFormField = (form, field, value) => {
    form = { ...form, [field]: value };
    return form;
  };

  const handleInputEvent = e => {
    formFields = updateFormField(formFields, e.detail.name, e.detail.value);
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
    grid-column: -1 / 1;
  }
</style>

<form action="">
  {#each inputs as input, i}
    <Input on:change={handleInputEvent} {...input} />
  {/each}
  <div class="button-container">
    <Button primary click={() => dispatch('submit', formFields)}>
      <span>{buttonText}</span>
    </Button>
  </div>
</form>
