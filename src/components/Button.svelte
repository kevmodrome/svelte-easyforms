<script>
  export let primary;
  export let primaryOutline;
  export let secondary;
  export let secondaryOutline;
  export let white;
  export let whiteOutline;
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
  .secondary {
    background: var(--secondary);
    border: solid var(--secondary) 2px;
    color: white;
    &:hover {
      background: var(--secondary-dark);
      border: solid var(--secondary-dark) 2px;
    }
  }
  .secondaryOutline {
    background: none;
    border: solid var(--secondary) 2px;
    color: var(--secondary);
    &:hover {
      background: var(--secondary-dark);
      color: var(--white);
      border: solid var(--secondary-dark) 2px;
    }
  }
  .white {
    background: var(--white);
    border: solid var(--white) 2px;
    color: white;
    &:hover {
      background: var(--white-dark);
      border: solid var(--white-dark) 2px;
    }
  }
  .whiteOutline {
    background: none;
    border: solid var(--white) 2px;
    color: var(--white);
    &:hover {
      color: var(--primary);
      border: solid var(--primary) 2px;
    }
  }
</style>

<button
  on:click|preventDefault={click}
  class:primary
  class:primaryOutline
  class:secondary
  class:secondaryOutline
  class:white
  class:big
  class:whiteOutline>
  <slot>Default</slot>
</button>
