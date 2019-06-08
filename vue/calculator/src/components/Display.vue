<template lang="html">
  <div class="display">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    value: 0
  }
}
</script>

<style lang="css">
  .display {
    grid-column: span 4;
    background-color: #0004;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    font-size: 2.1em;
    overflow: hidden;
  }
</style>
