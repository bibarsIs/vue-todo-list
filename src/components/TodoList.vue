<template>
  <div>
    <transition-group name="list">
      <TodoListItem class="my-2" v-for="todoListItem in todoListItems" :key="todoListItem.id"
                    :todoListItem="todoListItem"></TodoListItem>
    </transition-group>
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
.list-enter-active {
  transition: all 0.5s ease;
}
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.list-leave-to {
  opacity: 0;
  transform: scale(1);
}

</style>