<template>
  <header 
    class="shadow-sm border-b z-30"
    :style="{
      backgroundColor: backgroundColor,
      borderColor: borderColor
    }"
  >
    <div class="flex items-center justify-between p-4">
     
      <div class="flex items-center space-x-4">
       
        <button 
          @click="$emit('toggle-sidebar')"
          class="p-2 rounded-lg transition-colors md:hidden"
          :style="{ 
            backgroundColor: hoverBackgroundColor,
            color: textColor
          }"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      
        <h2 class="text-lg font-bold pl-4" :style="{ color: textColor }">{{ currentPage }}</h2>
      </div>

      <div class="max-w-xl mx-auto w-full md:block hidden md:w-1/2">  
        <form >   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Buscar</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar promociones..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                 :style="{ 
                    backgroundColor: primaryColor,
                   
                  }"
                >Buscar</button>
            </div>
        </form>
      </div>
      <div class="flex items-center space-x-2 p-1">      
        <button 
       
          class="p-2 rounded-lg transition-colors relative"
          :style="{ 
            backgroundColor: hoverBackgroundColor,
            color: textColor
          }"
        >
         <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M213.5-213.67v-23.16h59.17V-568q0-76.05 49.18-134.78 49.19-58.72 124.48-71.89v-17.92q0-14.54 9.47-24.31t24-9.77q14.53 0 24.2 9.77t9.67 24.31v18.26q75.66 12.83 125.08 71.55 49.42 58.73 49.42 134.78v331.17h59.16v23.16H213.5Zm266.5-281ZM479.82-114q-24.32 0-41.9-17.71-17.59-17.71-17.59-41.96h119.34q0 24.5-17.76 42.09Q504.15-114 479.82-114ZM295.83-236.83H665V-568q0-76.4-54.46-130.28-54.45-53.89-130.79-53.89-76.33 0-130.12 53.89-53.8 53.88-53.8 130.28v331.17Z"/></svg>
          <span 
            v-if="notificationCount > 0"
            class="absolute -top-1 -right-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            :style="{ backgroundColor: primaryColor }"
          >
            {{ notificationCount }}
          </span>
        </button>

       
        <div class="flex items-center space-x-3">
          <div 
            class="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm"
            :style="{ backgroundColor: primaryColor }"
          >
            {{ userInitials }}
          </div>
          <span class="font-medium" :style="{ color: textColor }">{{ userName }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useScopeColors } from '../composables/useColors'
const { primaryColor, backgroundColor, textColor } = useScopeColors('header')
import { useNavigation } from '../composables/useNavigation'
const notificationCount = ref(3)
const { currentPage } = useNavigation()

// Computed properties
const userName = computed(() => 'Ana Maza')
const userInitials = computed(() => userName.value.charAt(0))

const borderColor = computed(() => {
  return primaryColor.value + '30'
})

const hoverBackgroundColor = computed(() => {
  return primaryColor.value + '15'
})

// SOLO ESTA LÍNEA SE AGREGÓ
defineEmits(['toggle-sidebar'])
</script>