<template>
  <div class="home">
    <h1>ref vs Reactive</h1>
    <h3>{{ironman}}</h3>
    <h3>{{hulk}}</h3>
    <button @click="changeIronman">Iroman</button>
    <button @click="changeHulk">Hulk</button>
    <h3>Ironman: {{iromanIsAlive}}</h3>
    <h3>Hulk: {{hulkIsAlive}}</h3>
    <button @click="changeStatus">cambiar Estado</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  setup(){
    const ironman = ref({name:'Tony',age:50})
    const hulk = reactive({name:'Bruce',age:50})

    const iromanIsAlive = reactive(false);
    const hulkIsAlive = ref(true);

    const changeStatus = ()=>{
      hulkIsAlive.value = !hulkIsAlive.value
    }

    return{
      ironman,
      hulk,
      iromanIsAlive,
      hulkIsAlive,
      changeStatus,
      changeIronman:()=>{
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 55
      },
      changeHulk:()=>{
        hulk.value.name = 'Bruce Banner'
        hulk.value.age = 45
      }
    }
  }
}
</script>
