<template>
  <button
    class="ww-button"
    :class="['ww-button-' + type, 'ww-button' + size, {'isdisabled': disabled}]"
    :disabled="disabled"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'ww-button',
    props: {
      disabled: Boolean,
      type: {
        default: 'default',
        type: String,
        validator (value) {
          return [
            'success',
            'danger',
            'primary',
            'warning'
          ].indexOf(value) > -1
        }
      },
      size: {
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

    .ww-button, .ww-button-primary {
      appearance: none;
      border-radius: 4px;
      border: 0;
      box-sizing: border-box;
      padding: 6px 12px;
      background: #fff;
      outline: none;
      cursor: pointer;
      color: #fff;
      background: $green-color;
      font-size: 14px;

      &:active {
          opacity: .4
      }
    }

    .ww-button-danger {
      background: $red-color!important;
    }
    .ww-button-success {
      background: $green-color!important;
    }
    .ww-button-warning {
      background: $yellow-color!important;
    }
</style>
