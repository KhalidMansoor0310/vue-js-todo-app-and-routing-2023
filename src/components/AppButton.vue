<template>
  <Button v-on:click="onClick()" class="btn btn-primary">Add Task</Button>
</template>

<script>
export default {
  name: "AppButton",
  methods: {
    onClick() {
      console.log("wellcome ");
    },
  },
};
</script>
