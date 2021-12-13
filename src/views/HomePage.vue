<template>
  <div class="container col-lg-6 my-4">
    <h2 class="d-flex justify-content-center">Todo list app</h2>
    <p class="d-flex flex-column align-items-end">Finished tasks {{ finishedTasks }}/{{ totalTasks }}</p>
    <AddTodoListItem></AddTodoListItem>
  </div>

</template>

<script>
// @ is an alias to /src
import AddTodoListItem from "@/components/AddTodoListItem";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  components: {
    AddTodoListItem
  },
  setup() {

    const store = useStore()

    const finishedTasks = computed(() => {
      return store.getters.getDoneItemsLength
    })
    const totalTasks = computed(() => {
      return store.state.todoListItems.length
    })

    return {
      finishedTasks,
      totalTasks,
    }
  }
}

</script>
