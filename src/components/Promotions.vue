
<template>

    <div>
        <p class="text-[32px] font-bold">Nuestros roductos en promoción</p>
    </div>
    <div class="justify-end flex pe-5 pt-5 flex-row gap-2 pb-4 ">              
        <a href="#" class="inline-flex items-center ">
            <p class="font-bold text-[20px]"
            :style="{
                color:primaryColor
            }"
            >Ver todos</p>  
            <div >
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" 
                  :fill="primaryColor">
                
                ><path d="M532.92-480 350.77-662.15l25.85-26.47L585.23-480 376.62-271.38l-25.85-26.47L532.92-480Z"/></svg>
            </div>           
        </a>
    </div>
    <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4">
         <div v-for="prod in produts">
            <DetailPromotion :product="prod"></DetailPromotion>
        </div>
    </div>   
   
</template>
<script setup>
 import { ref} from 'vue'
 import DetailPromotion from './DetailPromotion.vue'
import { useScopeColors } from '../composables/useColors'
const { primaryColor, textColor } = useScopeColors('content')
 const produts=ref([
    {id:1, title:'Pizza margarita', price:20.5, valoration:'5', image:'/pizza.jpeg', description: 'Deliciosa pizza margarita .'},
    {id:2, title:'Ensalada cesar', price:20.5, valoration:'5', image:'/amburgueza.png',description: 'Hamburguesa clásica con carne jugosa,.'},
    {id:3, title:'Pizza margarita', price:20.5, valoration:'5', image:'/ensalada.jpeg', description: 'Ensalada César clásica con lechuga romana, crutones, '},
   
 ])


</script>