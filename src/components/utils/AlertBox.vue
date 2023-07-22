<template>
  <div class="alert" :class="`alert-${theme}`" role="alert">
    <h4 class="alert-heading">{{ heading }}</h4>

    <!-- the HTML content comes from the pafent component (this is the default slot) -->
    <!-- you can have only 1 default slot -->
    <slot></slot>

    <!-- named slots -->
    <!-- you can have as many named slots -->
    <slot name="hint"></slot>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      validator(value) {
        // custom validation
        console.log('validate is running');
        const themes = ['primary', 'secondary', 'light', 'dark', 'info', 'success', 'warning', 'danger'];

        return themes.includes(value);
      },
    },
  },
};
</script>

<style></style>
