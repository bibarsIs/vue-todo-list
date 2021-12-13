<template>
  <div>
    <form id="add" v-on:submit.prevent="addTodoListItem(todoListItemText)" class="d-flex justify-content-between ">
      <input type="text" v-model="todoListItemText" class="form-control shadow-sm" placeholder="Enter the task"
             aria-describedby="task">
      <button type="submit"
              form="add"
              class="btn btn-primary mx-3 shadow-sm"
      >Add
      </button>
    </form>
    <TodoList></TodoList>
  </div>

</template>

<script>
import {ref} from "vue";
import TodoList from "@/components/TodoList";
import {useStore} from 'vuex'

export default {
  components: {TodoList},

  setup() {
    const todoListItemText = ref('')

    const store = useStore()

    function addTodoListItem(text) {
      store.commit('addTodoListItem', {
        text: text,
        id: store.getters.geMaxId + 1
      })
      todoListItemText.value = ''
    }

    return {
      todoListItemText,
      addTodoListItem,
    }
  }
}


</script>

<style scoped>

</style>