<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>

  <modal 
      v-if="isOpen"
      title="Hola Mundo"
      @on:close="closeModal"
      >
      <!--<h2>Titulo del modal</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aut amet atque laborum rerum qui modi iste optio quos, quo eum dolores quasi autem neque alias rem et possimus. Est.</p>
      <button>Salir</button>-->
      <template v-slot:body>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum animi ullam illo dolorum, alias tenetur deleniti a quaerat exercitationem, itaque laboriosam repellendus officiis earum? Quaerat magni eius nulla praesentium nisi.</p>
      </template>
      <template v-slot:footer>
        <button @click="closeModal">Salir</button>
      </template>
      <template v-slot:header>
        <h2>Titulo del modal</h2>
      </template>
      <template v-slot:exposed="slotProps" >
        <h2>{{slotProps}}</h2>
      </template>
  </modal>
</template>

<script>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

export default {
    components:{
        Modal
    },
    setup(){
      const isOpen = ref(false);
      return{
        isOpen,
        openModal : ()=>isOpen.value = true,
        closeModal: ()=>isOpen.value = false,
      }
    }
}
</script>

<style scoped>

</style>