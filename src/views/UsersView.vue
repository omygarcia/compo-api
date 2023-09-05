<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h2 v-if="errorMessage">{{errorMesaage}}</h2>

  <div v-if="users.length > 0">
    <user-list 
        :users="users"
        v-slot="slotProps"
    >
        <h5>{{slotProps.user.first_name}} {{slotProps.user.last_name}}</h5>
        <span>{{slotProps.user.email}}</span>
    </user-list>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguente</button>
  <span>Pagina: {{currentPage}}</span>
</template>

<script>
import useUser from '@/composables/useUsers'
import UserList from '@/components/UserList.vue';

export default {
    components:{
        UserList
    },
    setup(){
        const {
            isLoading,
            Usuarios,
            errorMessage,
            users,
            prevPage,
            nextPage,
            currentPage,
        } = useUser();


        return{
            isLoading,
            Usuarios,
            errorMessage,
            users,
            prevPage,
            nextPage,
            currentPage,
        }
    }
}
</script>

<style scoped>
    h2{
       text-align: center;
       width: 100%; 
    }

    div{
        display: flex;
        justify-content: center;
        text-align: center;
    }

    ul{
        width: 250px;
    }
</style>