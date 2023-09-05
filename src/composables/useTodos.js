import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodos = ()=>{
    const store = useStore();
    //console.log(store)
    const currentTab = ref('all');

    return{
        currentTab,
        pending:computed(()=>store.getters['pendingTodos']),
        all:computed(()=>store.getters['allTodos']),
        completed:computed(()=>store.getters['completedTodos']),
        getTodosByTab:computed(()=>store.getters['getTodosByTab'](currentTab.value)),
        // Methods
        toggleTodo:(id)=>store.commit('toogleTodo',id),
        createTodo:(text)=>store.commit('createTodo',text),
    }
}

export default useTodos;