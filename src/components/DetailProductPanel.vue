<template>    

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  lg:w-[400px]  w-[300px]">
        <a href="#">
            <img class="rounded-t-lg lg:h-[248px] lg:w-[400px] h-[180px] w-[300px]" :src="product.image" alt="" />
        </a>
        <div class="p-5 h-[150px]">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{{product.title}}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-[14px] line-clamp-3">
              {{product.description}}
            </p>         
        </div>
        <div class="flex justify-between">
            <div>

            </div>
            <div class="text-2xl font-bold  pe-5 pb-5"
                :style="{
                    color: primaryColor,                        
                }"
            >
               $ {{ product.price }} 
            </div>
        </div>       
    </div>

</template>
<script setup>
import { useScopeColors } from '../composables/useColors'
const { primaryColor, backgroundColor, textColor } = useScopeColors('content')

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

</script>


