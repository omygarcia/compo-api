<template>
    <form @submit.prevent="onSubmit">
        <h1>Buscar pokémon: {{pokemonId}}</h1>
        <input 
            type="number" 
            placeholder="Número del pokemon"
            v-model="pokemonId"
            ref="txtSearchId"
        />
        <br />
        <span>Presione enter para buscar</span>
    </form>
</template>

<script>
import { onActivated, ref } from 'vue'
import { useRouter } from 'vue-router';

export default {
    setup(){
        const router  = useRouter();

        const pokemonId = ref(1);
        const txtSearchId = ref();

        onActivated(()=>{
            txtSearchId.value.focus();
        });
        
        return{
            pokemonId,
            txtSearchId,
            onSubmit:()=>{
                console.log('pokemon a buscar', pokemonId.value)
                router.push({name:'pokemon-id',params:{id:pokemonId.value}})
            }
        }
    }

}
</script>

<style>

</style>