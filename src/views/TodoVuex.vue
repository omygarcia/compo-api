<template>
    <h1>Lista de tareas de Thanos</h1>
    <!--<h4>Tareas: {{$store.state.todos.length}}</h4>
    <h4>Pendientes: {{$store.state.todos.filter(t=>!t.completed).length}}</h4>
    {{pending}}-->
    <h4>Pendientes: {{pending.length}}</h4>
    <hr />
    <h4>Todos: {{all.length}}</h4>
    <h4>Completados: {{completed.length}}</h4>

    <button 
        @click="currentTab = 'all'"
        :class="{'active':currentTab === 'all'}">
        Todos
    </button>
    <button 
        @click="currentTab = 'pending'"
        :class="{'active':currentTab === 'pending'}">
        Pendientes
    </button>
    <button 
        @click="currentTab = 'completed'"
        :class="{'active':currentTab === 'completed'}">
        Completados
    </button>

    <div>
        <ul>
            <li v-for="todo in getTodosByTab" :key="todo.id"
                :class="{'completed':todo.completed==true}"
                @dblclick="toggleTodo(todo.id)"
            >
                {{todo.text}}
            </li>
        </ul>
    </div>

    <button @click="openModal">Crear Todo</button>

    <!-- Modal-->
    <modal 
        v-if="isOpen"
        @on:close="closeModal"
        >
        <template v-slot:header>    
            <h3>Crear Todo</h3>
        </template>
        <template v-slot:body>    
            <form>
                <label>Por hacer:</label><br />
                <textarea v-model="text" placeholder="Nueva tarea"></textarea><br />
                <button @click.prevent="guardarTodo">Guardar</button>
            </form>
        </template>
        <template v-slot:footer>    
            <button @click="closeModal">Salir</button>
        </template>
    </modal>
    <!--
        Formulario
            submit.prevent
            createTodo
    -->
</template>

<script>
import useTodos from '@/composables/useTodos';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

export default {
    components:{
        Modal,
    },
    setup(){
        const isOpen = ref(false);
        const text = ref('');

        const {currentTab,
            pending,
            all,
            completed,
            getTodosByTab,
            toggleTodo,createTodo} = useTodos();

        const guardarTodo = ()=>{
            createTodo(text);
            isOpen.value = false;
        }

        return{
            currentTab,
            pending,
            all,
            completed,
            getTodosByTab,
            toggleTodo,
            createTodo,
            guardarTodo,
            text,
            isOpen,
            openModal:()=>isOpen.value = true,
            closeModal:()=>isOpen.value = false,
        }
    }
}
</script>

<style scoped>
div{
    display:flex;
    justify-content: center;
    text-align: center;
}

ul{
    width: 300px;
    text-align: left;
}

li{
    cursor: pointer;
}

.active{
    background-color: #2c3e50;
    color: white;
}

.completed{
    text-decoration: line-through;
}
</style>