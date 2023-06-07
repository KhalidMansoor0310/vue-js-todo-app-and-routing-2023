<template>
  <div class="container">
    <div :task="task">
      <div
        class="card d-lg-flex flex-lg-row justify-content-between my-3 p-3"
        :class="task.reminder ? 'reminder' : ''"
        v-on:dblclick="$emit('toggle-reminder', task.id)"
      >
        <h3>
          {{ task.text }}
        </h3>
        <p>{{ task.day }}</p>
        <button
          class="btn btn-danger"
          v-on:click="$emit('delete-task', task.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTask",
  props: {
    task: Object,
  },
};
</script>

<style>
.reminder {
  background: #f5f5f5;
  border-left: 3px solid green;
}
</style>
