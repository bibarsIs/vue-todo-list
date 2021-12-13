<template>
  <div v-if="editing === false"
      class="bg-white my-2 py-2 px-4 shadow-sm rounded-3 d-flex align-items-center justify-content-between border-start border-5 border-success"
      :class="{ 'border-danger': !todoListItem.done }">
    <span>{{ todoListItem.text }}</span>
    <div class="d-flex justify-content-between col-sm-2">
      <i class="bi bi-pencil-fill" @click="editItem"></i>
      <i class="bi bi-trash-fill" @click="deleteItem"></i>
      <i class="bi bi-check-lg" :class="{ 'text-success': todoListItem.done}" @click="toggleDone"></i>
    </div>
  </div>

  <div v-else class="d-flex ">
    <form id="edit" v-on:submit.prevent="doneEdit(todoListItem.text)">
      <input ref="inputEdit" id="inputEdit" type="text" v-model="todoListItemLocal.text" class="form-control shadow-sm"/>
    </form>
    <button type="submit" form="edit" class="btn btn-secondary mx-3 shadow-sm">Done</button>

  </div>
</template>

<script>
import { useStore } from 'vuex'
import {nextTick, reactive, ref} from "vue";

export default {

  props: {
    todoListItem: {
      type: Object,
      required: true,
    }
  },

  setup(props) {
    const todoListItemLocal = reactive(props.todoListItem)

    const store = useStore()

    const inputEdit = ref(null)

    function toggleDone() {
      store.commit('toggleDone', props.todoListItem.id)
    }

    function deleteItem() {
      store.commit('deleteTodoListItem', props.todoListItem.id)
    }

    let editing = ref(false)
    async function editItem() {
      editing.value = true
      await nextTick() //wait next tick for rerender
      inputEdit.value.focus()
    }
    function doneEdit(text) {
      store.commit('setTodoListItem', {
        id: props.todoListItem.id,
        text: text})
      editing.value = false
    }

    return {
      toggleDone,
      deleteItem,
      editItem,
      editing,
      doneEdit,
      todoListItemLocal,
      inputEdit
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