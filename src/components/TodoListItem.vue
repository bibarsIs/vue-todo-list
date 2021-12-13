<template>
  <div v-if="editing === false"
      class="bg-white my-2 py-2 px-4 shadow-sm rounded-3 d-flex align-items-center justify-content-between border-start border-5 border-success"
      :class="{ 'border-danger': !todoListItem.done }">
    <span>{{ todoListItem.text }}</span>
    <div class="d-flex justify-content-between col-sm-2">
      <i class="bi bi-pencil-fill" @click="toggleEdit"></i>
      <i class="bi bi-trash-fill" @click="deleteItem"></i>
      <i class="bi bi-check-lg" :class="{ 'text-success': todoListItem.done}" @click="toggleDone"></i>
    </div>
  </div>
<!--  todo-->
  <div v-else class="d-flex ">
    <form id="edit" v-on:submit.prevent="toggleEdit">
      <input type="text" :value="todoListItem.text" class="form-control shadow-sm">
    </form>
    <button type="submit" form="edit" class="btn btn-secondary mx-3 shadow-sm" @click="toggleEdit">Done</button>

  </div>
</template>

<script>
import { useStore } from 'vuex'
import {ref} from "vue";

export default {
  props: {
    todoListItem: {
      type: Object,
      required: true,
    }
  },

  setup(props) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const todoListItem = props.todoListItem
    const store = useStore()

    function toggleDone() {
      store.commit('toggleDone', todoListItem.id)
    }

    function deleteItem() {
      store.commit('deleteTodoListItem', todoListItem.id)
    }

    let editing = ref(false)
    function toggleEdit() {
      editing.value = !editing.value
    }

    return {
      toggleDone,
      deleteItem,
      toggleEdit,
      editing
    }
  }
}

</script>

<style scoped>
i {
  cursor: pointer;
  font-size: 125%;
}
</style>