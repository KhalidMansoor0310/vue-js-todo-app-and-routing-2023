<template>
  <div class="container">
    <form @submit="addTask">
      <div class="form-group my-3">
        <label for="taskText">Task Text</label>
        <input
          type="text"
          class="form-control"
          id="taskText"
          v-model="text"
          placeholder="Enter task text"
        />
      </div>
      <div class="form-group my-3">
        <label for="taskDay">Task Day</label>
        <input
          type="text"
          class="form-control"
          id="taskDay"
          v-model="day"
          placeholder="Enter task day"
        />
      </div>
      <div class="form-check my-3">
        <input
          type="checkbox"
          class="form-check-input"
          id="reminderCheckbox"
          v-model="reminder"
        />
        <label class="form-check-label" for="reminderCheckbox">Reminder</label>
      </div>
      <button class="btn btn-primary" type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    addTask(e) {
      e.preventDefault();
      let newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.text = "";
      this.day = "";
      this.reminder = "";

      this.$emit("add-task", newTask);
    },
  },
};
</script>
