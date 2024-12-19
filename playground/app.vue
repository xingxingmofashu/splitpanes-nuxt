<template>
  <Splitpanes
    class="default-theme"
    horizontal
    style="height: 400px"
  >
    <Pane
      min-size="20"
      max-size="70"
    >
      <span>1</span>
    </Pane>
    <Pane>
      <span>2</span>
    </Pane>
    <Pane max-size="70">
      <span>3</span>
    </Pane>
  </Splitpanes>
</template>
