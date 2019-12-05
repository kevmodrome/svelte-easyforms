<script>
  export let primary;
  export let primaryOutline;
  export let big;
  export let click;
</script>

<style>
  button {
    cursor: pointer;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
  }
  .big {
    padding: 20px 35px;
  }
  .primary {
    background: #d62246;
    border: solid #d62246 2px;
    color: white;
  }
  .primary:hover {
    background: #b41a39;
    border: solid #b41a39 2px;
  }
  .primaryOutline {
    background: none;
    border: solid #d62246 2px;
    color: #d62246;
  }
  .primaryOutline:hover {
    color: #b41a39;
    border: solid #b41a39 2px;
  }
</style>

<button
  on:click|preventDefault={click}
  class:primary
  class:primaryOutline
  class:big>
  <slot>Default</slot>
</button>
