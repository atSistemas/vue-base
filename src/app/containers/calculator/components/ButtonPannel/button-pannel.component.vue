<template>
<div class="ButtonPanel">
  <div class="Column">
    <div class="Row">
      <base-button type="number" value="C"></base-button>
      <base-button type="number" value="+/-" ></base-button>
      <base-button type="number" value="%" ></base-button>
      <base-button type="operator" value="÷"></base-button>
    </div>
    <div class="Row">
      <base-button type="number" value="7" ></base-button>
      <base-button type="number" value="8" ></base-button>
      <base-button type="number" value="9"></base-button>
      <base-button type="operator" value="x"></base-button>
    </div>
    <div class="Row">
      <base-button type="number" value="4" ></base-button>
      <base-button type="number" value="5" ></base-button>
      <base-button type="number" value="6" ></base-button>
      <base-button type="operator" value="-" ></base-button>
    </div>
    <div class="Row">
      <base-button type="number" value="1" ></base-button>
      <base-button type="number" value="2" ></base-button>
      <base-button type="number" value="3" ></base-button>
      <base-button type="operator" value="+" ></base-button>
    </div>
    <div class="Row">
      <base-button type="zero" value="0" ></base-button>
      <base-button type="number" value="." ></base-button>
      <base-button type="operator" value="=" ></base-button>
    </div>
  </div>
</div>
</template>

<style scoped src="./button-pannel.component.css"></style>
<script src="./button-pannel.component.js"></script>
