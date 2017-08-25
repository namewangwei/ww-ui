<template>
  <transition name="fade" id="message">
      <div class="ww-message" v-if="1">12312312313hahahah</div>
  </transition>
</template>
<script>
  export default {
    name: 'message'
  }
</script>
<style>
  #message > .ww-message {
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 4px;
    border: 1px solid #999;
  }
</style>
