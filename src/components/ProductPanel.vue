<template>
    <div>
        <p class="text-[32px] font-bold">Los productos mas vendido</p>
    </div>
    <div class="justify-end flex pe-5 pt-5 flex-row gap-2 pb-4 ">              
        <a href="#" class="inline-flex ">
            <p >Ver todos</p>  
            <div >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none"><path d="M532.92-480 350.77-662.15l25.85-26.47L585.23-480 376.62-271.38l-25.85-26.47L532.92-480Z"/></svg>
            </div>           
        </a>
    </div>
    <div class="grid xl:grid-cols-3 lg:grid-cols-2 grid-col-1 gap-4">
         <div v-for="prod in produts">
            <DetailProductPanel :product="prod"></DetailProductPanel>
        </div>
    </div>   
   
</template>
<script setup>
 import { ref} from 'vue'
 import DetailProductPanel  from './DetailProductPanel.vue'
 const produts=ref([
    {id:1, title:'Pizza margarita', price:20.5, valoration:'5', image:'/pizza.jpeg', description: 'Deliciosa pizza margarita con salsa de tomate, queso mozzarella y albahaca fresca.'},
    {id:2, title:'Ensalada cesar', price:20.5, valoration:'5', image:'/amburgueza.png',description: 'Hamburguesa clásica con carne jugosa, queso cheddar, lechuga, tomate y cebolla en un pan suave.'},
    {id:3, title:'Pizza margarita', price:20.5, valoration:'5', image:'/ensalada.jpeg', description: 'Ensalada César clásica con lechuga romana, crutones, queso parmesano y aderezo César.'},
    {id:4, title:'Donas de la casa', price:20.5, valoration:'5', image:'/donas.png', description: 'Variedad de donas frescas y esponjosas con diferentes coberturas y rellenos.'},

 ])


</script>
