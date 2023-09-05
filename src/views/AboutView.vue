<template>
  <div class="about">
    <h1>{{title}}</h1>
    <button @click="changeTitle">
      Cambiar titulo
    </button>
  </div>
</template>

<script>


import { defineComponent,onActivated,onBeforeMount,onBeforeUnmount,onBeforeUpdate,onDeactivated,onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, ref } from "vue";


export default defineComponent({
  setup() {
    console.log("Setup se llamo");

    const title = ref('About');

    onBeforeMount(()=>{
      console.log('onBeforeMount')
    })

    onMounted(()=>{
      console.log('onMounted')
    });

    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate')
    });

    onUpdated(()=>{
      console.log('onUpdated')
    });

    onBeforeUnmount(()=>{
      console.log('onBeforeUnmount')
    });

    onUnmounted(()=>{
      console.log('onUnmounted')
    });

    onRenderTracked(()=>{
      console.log('onRenderTracked')
    });

    onRenderTriggered(()=>{
      console.log('onRenderTriggered')
    });

    onActivated(()=>{
      console.log('onActivated')
    });

    onDeactivated(()=>{
      console.log('onDeactivated')      
    });

    return{
      title,
      changeTitle:()=>{title.value = 'New About'}
    }

  },
})
</script>

