<template>
  <div class="alert" :class="`alert-${theme}`" role="alert">
    <h4 class="alert-heading">{{ heading }}</h4>
    <!-- this is default slot -->
    <slot></slot>
    <!-- this are named slots -->
    <slot name="hint"></slot>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
      default: "Error here",
    },
    theme: {
      type: String,
      validator(value) {
        //used for custom validation
        const themes = ["primary", "secondary", "light", "dark", "info", "success", "warning", "danger"];
        return themes.includes(value);
      },
    },
  },
};
</script>

<style></style>
