<template>
  <button
    :type="nativeType"
    :size="nativeSize"
    class="ww-button"
    :class="['ww-button-' + nativeType, 'ww-button' + nativeSize]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'ww-button',
    props: {
      nativeType: {
        default: 'default',
        type: String,
        validator (value) {
          return [
            'default',
            'danger',
            'primary'
          ].indexOf(value) > -1
        }
      },
      nativeSize: {
        default: 'normal',
        type: String,
        validator (value) {
          return [
            'small',
            'normal',
            'large'
          ].indexOf(value) > -1
        }
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>

<style lang="scss">
   @import "./../../style/var.scss";
   /* $button-default-color: red; */
    .ww-button {
      appearance: none;
      border-radius: 4px;
      border: 1px solid $border-color;
      box-sizing: border-box;
      padding: 6px 12px;
      background: #fff;
      outline: none;
      cursor: pointer;

      &:active, &:hover {
          color: $blue-color;
          border: 1px solid $blue-color;
      }
    }
</style>
