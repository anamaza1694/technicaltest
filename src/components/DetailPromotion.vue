<template>    

<div class="max-w-sm bg-transparent lg:w-[400px] w-[300px] p-4  overflow-visible">
    <div class="relative bg-white p-6 rounded-md border shadow-lg"
      :style="{
          backgroundColor: product.id % 2 === 0 ? primaryColor : 'white',
          borderColor: product.id % 2 !== 0 ? primaryColor : '#E5E7EB'
        }"
    >
   
        <div class="absolute -right-10 top-1/4 z-10">
            <a href="#">
                <img class="rounded-full h-40 w-40 lg:h-32 lg:w-32 border-4 border-white shadow-2xl" 
                     :src="product.image" 
                     alt="producto" />
            </a>
        </div>        
     
        <div class="pr-20"> 
            <div class="h-[150px]">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2"
                    :class="{
                        'text-white': product.id % 2 === 0,
                        'text-gray-900': product.id % 2 !== 0
                    }"
                    >
                        {{product.title}}
                    </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-[14px] line-clamp-3"
                 :class="{
                        'text-white': product.id % 2 === 0,
                        'text-gray-900': product.id % 2 !== 0
                    }"
                >
                    {{product.description}}
                </p>         
            </div>
            
            <div class="flex flex-row items-center justify-between">           
                <div class="text-lg font-bold pe-5 pb-5"
                    :style="{
                        color: product.id % 2 !== 0 ? primaryColor : 'white'
                        }"
                >
                    $ {{ product.price }} 
                </div>
                <div>
                    <button class="text-white p-1 me-5 mb-5 shadow-lg rounded-full"
                        :style="{
                             backgroundColor: product.id % 2 !== 0 ? primaryColor : 'white',
                          
                        }"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        :fill="product.id % 2 !== 0 ? 'white' : primaryColor">
                            <path d="M463.08-463.58H246.15v-33.84h216.93v-216.93h33.84v216.93h216.93v33.84H496.92v216.93h-33.84v-216.93Z"/>
                        </svg>
                    </button>
                </div>
            </div>       
        </div>
    </div>
</div>

</template>
<script setup>
import { useScopeColors } from '../composables/useColors'
const { primaryColor, textColor } = useScopeColors('content')

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

</script>
