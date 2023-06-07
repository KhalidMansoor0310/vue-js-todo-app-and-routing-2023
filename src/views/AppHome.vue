<template>
  <div class="container">
    <AddTask @add-task="addTask" />
    <AppTasks
      @toggle-reminder="toggleReminder"
      @delete-Task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>
<script>
import AppTasks from "../components/AppTasks.vue";
import AddTask from "../components/AddTask.vue";
export default {
  name: "AppHome",
  components: {
    AppTasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    addTask(newTask) {
      this.tasks = [...this.tasks, newTask];
    },
    toggleReminder(id) {
      console.log(id);
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
  },
  created() {
    this.tasks = [
      {
        id: 0,
        text: "To avoid smoking",
        day: "23 march 2024",
        reminder: true,
      },
      {
        id: 1,
        text: "To Do computer programing",
        day: "23 march 2024",
        reminder: true,
      },
      {
        id: 2,
        text: "To work hard ",
        day: "3 march 2024",
        reminder: false,
      },
      {
        id: 3,
        text: "To Learn programing",
        day: "23 march 2024",
        reminder: true,
      },
    ];
  },
};
</script>
