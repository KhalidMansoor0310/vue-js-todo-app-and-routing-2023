<template>
  <div v-for="task in tasks" :key="task.id">
    <AppTask
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script>
import AppTask from "./AppTask.vue";
export default {
  name: "AppTasks",
  components: {
    AppTask,
  },
  props: {
    tasks: Array,
  },
  emits: ["delete-task", "toggle-reminder"],
};
</script>
