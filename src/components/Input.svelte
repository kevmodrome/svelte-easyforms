<script>
  import { autoresize } from "../../actions/autoresize.js";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let placeholder = "";
  export let full = false;
  export let name = "";
  export let title = "";
  export let value = "";
  export let error = true;
  export let errorMessage = "";
  export let type;
  export let textareaHeight = "150px";

  $: dispatch("change", { name, value });
</script>

<style lang="scss">
  label {
    font-family: "Work Sans";
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr;
  }
  input,
  textarea {
    box-sizing: border-box;
    font-family: "Work Sans";
    border: 4px solid var(--cream);
    border-radius: 10px;
    font-size: 15px;
    padding: 15px;
    &::placeholder {
      font-style: bold;
      color: rgba(0, 0, 0, 0.4);
    }
    &:focus {
      border: 4px solid var(--secondary-dark);
    }
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

<label class:full>
  {title}
  {#if type !== 'textarea'}
    <input {name} {placeholder} bind:value class:error />
  {:else}
    <div style="min-height: {textareaHeight}">
      <textarea
        style="min-height: {textareaHeight}"
        bind:value
        class:error
        {name}
        {placeholder}
        use:autoresize />
    </div>
  {/if}
  {#if error && errorMessage}
    <div class="error-container">{errorMessage}</div>
  {/if}
</label>
