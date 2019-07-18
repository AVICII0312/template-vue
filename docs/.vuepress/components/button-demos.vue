<template>
  <div>
    <g-button>默认样式</g-button>
    <g-button icon="setting">默认样式</g-button>
    <g-button loading="true">默认样式</g-button>
    <g-button disabled>默认样式</g-button>

    <pre>
        <code>{{content}}</code>
    </pre>
  </div>
</template>
<script>
import Buttondemo from "../../../src/button";
export default {
  components: {
    "g-button": Buttondemo
  },
  data() {
    return {
      content: `
        <g-button>默认样式</g-button>
        <g-button icon='setting' >默认样式</g-button>
        <g-button loading="true">默认样式</g-button>
        <g-button disabled>默认样式</g-button>
          `
    };
  }
};
</script>
