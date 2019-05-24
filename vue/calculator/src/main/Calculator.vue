<template lang="html">
  <div class="calculator">
    <Display :value="displayValue" />
        <Button label="AC" @onClick="clearMemory" triple />
        <Button label="/" @onClick="setOperation" operation />
        <Button label="7" @onClick="addDigit"/>
        <Button label="8" @onClick="addDigit"/>
        <Button label="9" @onClick="addDigit"/>
        <Button label="*" @onClick="setOperation" operation />
        <Button label="4" @onClick="addDigit"/>
        <Button label="5" @onClick="addDigit"/>
        <Button label="6" @onClick="addDigit"/>
        <Button label="-" @onClick="setOperation" operation />
        <Button label="1" @onClick="addDigit"/>
        <Button label="2" @onClick="addDigit"/>
        <Button label="3" @onClick="addDigit"/>
        <Button label="+" @onClick="setOperation" operation />
        <Button label="0" @onClick="addDigit" double/>
        <Button label="." @onClick="addDigit"/>
        <Button label="=" @onClick="setOperation" operation />
  </div>

</template>

<script>
import Display from '../components/Display.vue'
import Button from '../components/Button.vue'
export default {
  components: { Button, Display },
  data: function() {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0,0],
      current: 0
    }
  },
  methods: {
    clearMemory() {
    },
    setOperation(operation) {

    },
    addDigit(digit) {

    }
  }
}

</script>

<style lang="css">
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
