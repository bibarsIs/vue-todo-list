<template>
  <div class="overflow-auto" style="max-height: 500px;">
  <TodoListItem class="my-2" v-for="todoListItem in todoListItems" :key="todoListItem.id" :todoListItem="todoListItem"></TodoListItem>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  components: {TodoListItem},

  setup() {
    const store = useStore()

    const todoListItems = computed(() => store.state.todoListItems)
    return {
      todoListItems
    }
  }
}

</script>

<style scoped>

</style>