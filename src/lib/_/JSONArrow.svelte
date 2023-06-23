<script lang="ts">
  import { useState } from './utils/context';

  const { expanded: _expanded, expandable } = useState();
  export let expanded = _expanded;
</script>

{#if $expandable}
  <button
    class="container"
    on:click={(event) => {
      event.stopPropagation();
      $expanded = !$expanded;
    }}
  >
    <span class="arrow" class:expanded={$expanded}>{'\u25B6'}</span>
  </button>
{/if}

<style>
  .container {
    display: flex;
    transform: translate(calc(0px - var(--li-identation)), -50%);
    position: absolute;
    top: 50%;
    background: transparent;
    justify-content: center;
    align-items: center;
    border: 0;
  }
  .arrow {
    transform-origin: 25% 50%;
    position: relative;
    line-height: 1.1em;
    font-size: 0.75em;
    margin-left: 0;
    transition: 150ms;
    color: var(--arrow-color);
    user-select: none;
    font-family: 'Courier New', Courier, monospace;
    display: block;
  }
  .expanded {
    transform: rotateZ(90deg) translateX(-3px);
  }
</style>
