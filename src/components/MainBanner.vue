<template>
    <div class="p-2 ">
        <div class="flex md:flex-row flex-col">
            <div class="flex flex-col w-full md:w-1/2">
                <p class="lg:text-[48px] font-bold lg:leading-[48px] text-gray-700 text-[32px] leading-[40px] "
                    :style="{
                        color: textColor,                        
                    }"
                >El lugar donde los buenos momentos saben mejor</p>      
                <div class="pt-4 md:w-2/3 lg:w-1/2 w-full">
                     <p class="text-[14px] text-gray-500 ">Sabores intensos, texturas perfectas y una presentación que enamora. 
                        La elección ideal para quienes buscan lo mejor</p>      
                </div>
               
                <div class="w-full md:w-1/2 lg:w-1/3 pt-12">
                     <button class="text-white p-2  shadow-lg rounded-full w-full  "
                        :style="{
                            backgroundColor: primaryColor,        

                            }"
                        >
                        Pedir ahora!
                     </button>  
                </div>                       
            </div>
            <div class="md:w-1/2  w-full relative flex md:flex-row flex-col pt-2 ">    
                <div class="right-0 absolute md:z-20 z-10  border-0">
                    <img src="/amburgueza.png" class="rounded-full w-80 h-80 lg:w-80 lg:h-80 shadow-2xl md:w-60 md:h-60 "></img>
                </div>    

            
                <div class="absolute lg:right-50 md:right-20 md:top-32 top-80 md:z-10 z-20 p-6 lg:w-2/3 w-full">       
                    <div 
                        class="absolute inset-0 rounded-lg"
                        :style="{
                            backgroundColor: primaryColor,                        
                            opacity: 0.1
                        }"
                    ></div>        
                
                <div class="relative z-10 inline-flex gap-2 items-center">
                    <div class="flex flex-row gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000">
                            <path d="M234.85-151.49q-49.46 0-85.47-33.46-36.01-33.47-37.52-83.21H31.99V-723.7q0-35.06 24.88-59.93 24.87-24.88 59.93-24.88h566.67v154.65h102.15l142.72 190.61v195.09h-79.72q-1.89 49.74-37.98 83.21-36.1 33.46-85.56 33.46t-85.47-33.46q-36.01-33.47-37.52-83.21H357.82q-1.89 49.23-37.7 82.95-35.81 33.72-85.27 33.72Zm-.08-70.87q22 0 37.75-15.59 15.75-15.58 15.75-37.75 0-22.16-15.73-37.75-15.72-15.58-37.61-15.58-22.16 0-37.75 15.58-15.58 15.59-15.58 37.75 0 22.17 15.58 37.75 15.59 15.59 37.59 15.59ZM116.8-352.97h27.14q15.98-21.46 39.48-33.91 23.51-12.45 50.74-12.45 27.24 0 50.93 12.52t39.63 33.84h273.94V-723.7H116.8v370.73ZM725-222.36q22 0 37.75-15.59 15.75-15.58 15.75-37.75 0-22.16-15.72-37.75-15.73-15.58-37.61-15.58-22.17 0-37.75 15.58-15.59 15.59-15.59 37.75 0 22.17 15.59 37.75Q703-222.36 725-222.36Zm-41.53-206.31h164.74l-105.17-140h-59.57v140Zm-325.4-102.66Z"/>
                        </svg>
                        <div class="flex flex-col gap-2 ">                               
                            <p class="text-gray-900 text-[14px] font-bold">Fast Delívery</p>
                            <p class="text-gray-600 text-[12px] md:w-2/3 w-full">Te llevamos a cualquier zona del país</p>

                        </div>   
                    </div>
                </div>
                <div class="relative z-10 inline-flex gap-2 items-center pt-2 pb-4">
                    <div class="flex flex-row gap-2">
                       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M320-680q-50 0-85-35t-35-85q0-50 35-85t85-35q38 0 69 22.5t45 57.5h326v80h-40v80h-80v-80H434q-14 35-45 57.5T320-680Zm0-80q17 0 28.5-11.5T360-800q0-17-11.5-28.5T320-840q-17 0-28.5 11.5T280-800q0 17 11.5 28.5T320-760Zm40 500q17 0 28.5-11.5T400-300q0-17-11.5-28.5T360-340q-17 0-28.5 11.5T320-300q0 17 11.5 28.5T360-260Zm240 0q17 0 28.5-11.5T640-300q0-17-11.5-28.5T600-340q-17 0-28.5 11.5T560-300q0 17 11.5 28.5T600-260ZM200-376l66-192q5-14 16.5-23t25.5-9h344q14 0 25.5 9t16.5 23l66 192v264q0 14-9 23t-23 9h-16q-14 0-23-9t-9-23v-48H280v48q0 14-9 23t-23 9h-16q-14 0-23-9t-9-23v-264Zm106-64h348l-28-80H334l-28 80Zm-26 80v120-120Zm0 120h400v-120H280v120Z"/></svg>
                        <div class="flex flex-col gap-2 ">                               
                            <p class="text-gray-900 text-[14px] font-bold">Pick up</p>
                            <p class="text-gray-600 text-[12px] md:w-2/3 w-full">Si lo deseas tambien puedes retirar en nuestras tiendas</p>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>  
</template>
<script setup>
import { useScopeColors } from '../composables/useColors'
const { primaryColor, backgroundColor, textColor } = useScopeColors('content')

</script>