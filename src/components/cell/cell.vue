<template>
  <a :href="href">
    <div class="ww-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="ww-cell-wrapper">
      <div class="ww-cell-title">
        <slot name="title">
          <span class="ww-cell-text" v-text="title"></span>
          <span v-if="label" class="ww-cell-label" v-text="label"></span>
        </slot>
      </div>
      <div class="ww-cell-value" :class="{ 'is-link' : isLink }">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
    </div>
    <div class="mint-cell-right">
      <slot name="right"></slot>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ww-cell',
  props: {
    to: [String, Object],
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  }
};
</script>
<style>
  
</style>