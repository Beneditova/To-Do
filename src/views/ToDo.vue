<template>
  <div class="container my-5">
    <h1
      class="mainHeader"
    >
      To Do/Task App/ Белeжник
    </h1>
    <form class="row container my-4" @submit="save">
      <div class="col-md-3"></div>
      <div class="col-md-6" style="text-align: left">
        <label
          for="todo"
          style="font-weight: 700; font-size: 15px; color: white"
          >Нова Бележка</label
        >
        <input
          class="form-control styledInput"
          name="todo"
          id="todo"
          type="text"
          required
          v-model="todo"
        />
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-3"></div>
      <div class="col-md-6 my-2 d-grid gap-2">
        <button
          type="submit"
          class="addButton"
        >
          Добави Бележка
        </button>
      </div>
      <div class="col-md-3"></div>
    </form>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h2
          class="toDoListTitle"
        >
          Списък на Бележки
        </h2>
      </div>
      <div class="col-md-3"></div>
    </div>
    <div class="container" v-if="ToDo_list.length">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <ul style="padding: 10px">
            <li
              v-for="(todo, index) in ToDo_list"
              v-bind:key="index"
             class="styleObject"
            >
            <div class="col-md-9" style="text-align:left;">
                              <span
                style="cursor: pointer"
                :class="{ done: todo.done }"
                >{{ todo.todo }}</span
              >

            </div>
            <div class="col-md-2">
            <span class="form-check form-switch" @click="doneTodo(todo)" style="margin-left:20px;">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" data-onstyle="#97d2e4">
              </span>
            </div>
            <div class="col-md-1">
                              <button
                @click="delete_ToDo(index)"
                class="deleteButton"
              >
               Премахни
              </button>

            </div>            
            </li>
          </ul>
        </div>

        <div class="col-md-3"></div>
      </div>
    </div>
    <div class="container" v-else>
      <ul></ul>
      <h4
        class="header"
      >
        Празен Списък
      </h4>
    </div>
  </div>
</template>
<style scoped src="@/css/toDo.css">
</style>
<script>
export default {
  name: "ToDo",
  data() {
    return {
      ToDo_list: [],
    };
  },
  mounted() {
    if (localStorage.getItem("allToDo")) {
      this.ToDo_list = JSON.parse(localStorage.getItem("allToDo"));
    }
  },
  methods: {
    save() {
      var existingTasks = JSON.parse(localStorage.getItem("allToDo"));
      if (existingTasks == null) existingTasks = [];
      localStorage.setItem(
        "ToDO",
        JSON.stringify({ todo: this.todo, done: false })
      );
      existingTasks.push({ todo: this.todo, done: false });
      localStorage.setItem("allToDo", JSON.stringify(existingTasks));
    },
    delete_ToDo(index) {
      this.ToDo_list.splice(index, 1);
      localStorage.setItem("allToDo", JSON.stringify(this.ToDo_list));
    },
    doneTodo(todo) {
        todo.done = !todo.done;
    },
  },
};
</script>
