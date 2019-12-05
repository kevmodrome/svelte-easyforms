<script>
  export let primary;
  export let primaryOutline;
  export let big;
  export let click;
</script>

<style lang="scss">
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
    background: var(--primary);
    border: solid var(--primary) 2px;
    color: white;
    &:hover {
      background: var(--primary-dark);
      border: solid var(--primary-dark) 2px;
    }
  }
  .primaryOutline {
    background: none;
    border: solid var(--primary) 2px;
    color: var(--primary);
    &:hover {
      color: var(--primary-dark);
      border: solid var(--primary-dark) 2px;
    }
  }
</style>

<button
  on:click|preventDefault={click}
  class:primary
  class:primaryOutline
  class:big>
  <slot>Default</slot>
</button>
