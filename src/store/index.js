import {createStore} from 'vuex'
import {TodoListItem} from "../../TodoListItem";


export default createStore({
    state: {
        todoListItems: []   // [{text: 'Do the dishes', id: 0, done: false}]
    },

    mutations: {
        addTodoListItem(state, payload) {
            state.todoListItems.push(new TodoListItem(payload.text, payload.id))
        },
        toggleDone(state, id) {
            const item = state.todoListItems.find(item => item.id === id)
            item.done = !item.done
        },
        deleteTodoListItem(state, id) {
            const item = state.todoListItems.find(o => o.id === id)
            state.todoListItems = state.todoListItems.filter(o => {
                return o.id !== item.id
            })
        },
        setTodoListItem(state, id, text) {
            const item = state.todoListItems.find(o => o.id === id)
            item.text = text
        }
    },

    getters: {
        geMaxId(state) {
            return Math.max(...state.todoListItems.map(o => o.id), 0)
        },
        getTodoListItem: (state) => (id) => {
            return state.todoListItems.find(item => item.id === id)
        },
        getDoneItemsLength(state) {
            return state.todoListItems.filter(item => {
                return item.done === true
            }).length
        }
    },

    actions: {},
    modules: {}
})
