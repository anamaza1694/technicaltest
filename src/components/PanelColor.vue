<template>
  <div class="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
 
    <button
      @click="togglePanel"
      class="bg-blue-600 text-white p-3 rounded-tl-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out "
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
        <path d="m349-189.5-200-200q-7.5-7.74-12-18.87t-5-21.03q0-12.9 4.75-22.75T149-471l226.5-226L255-814.5l16-14.5 358.6 359.07q8.87 8.43 13.39 18.84 4.51 10.4 4.51 22.87 0 9.96-4.51 21.01-4.52 11.04-13.49 18.71l-198 199q-10 8.5-19.85 12.75-9.85 4.25-21.75 4.25-10.9.5-22.03-4t-18.87-13Zm40-494L159.5-452q-6.5 6-8.25 12t-1.75 12h481q0-6-2-12t-8-12L389-683.5ZM768.66-172q-23.85 0-40.75-17.9Q711-207.8 711-232q0-20.28 7.25-38.39T739-304l30-37 32 37q13.5 15.5 20.75 33.61T829-232q0 25.7-17.5 42.85Q794-172 768.66-172Z"/>
      </svg>
    </button>


    <div
      v-show="isOpen"
      class="bg-white w-96 p-6 rounded-bl-lg shadow-xl border border-gray-200 max-h-[90vh] overflow-y-auto transition-all duration-300 ease-in-out transform"
      :class="isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'"
    >

      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-semibold text-gray-800">Personalizar Colores</h3>
        <button
          @click="togglePanel"
          class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

   
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-3">
          Ámbito de aplicación
        </label>
        <div class="grid grid-cols-3 gap-2">
          <button
            v-for="scopeOption in scopeOptions"
            :key="scopeOption.value"
            @click="setScope(scopeOption.value)"
            class="py-2 px-4 rounded-lg border transition-all duration-200 ease-in-out text-sm cursor-pointer"
            :class="[
              scope === scopeOption.value 
                ? 'bg-blue-100 border-blue-500 text-blue-700 scale-105 shadow-sm' 
                : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 hover:scale-105'
            ]"
          >
            {{ scopeOption.label }}
          </button>
        </div>
      </div>
    
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-3">
          Color Principal
        </label>
        <div class="grid grid-cols-6 gap-2">
          <button
            v-for="color in primaryColors"
            :key="color.name"
            @click="setColor('primary', color.value)"
            class="w-8 h-8 rounded-full border-2 transition-all duration-200 ease-in-out cursor-pointer"
            :class="[
              getCurrentColor('primary') === color.value 
                ? 'border-gray-500 scale-110 ring-2 ring-offset-2 ring-gray-300' 
                : 'border-gray-300 hover:scale-110'
            ]"
            :style="{ backgroundColor: color.value }"
            :title="color.name"
          >
            <span 
              v-if="getCurrentColor('primary') === color.value" 
              class="text-white text-xs"
            >
              ✓
            </span>
          </button>
        </div>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-3">
          Color de Fondo
        </label>
        <div class="grid grid-cols-6 gap-2">
          <button
            v-for="bg in backgroundColors"
            :key="bg.name"
            @click="setColor('background', bg.value)"
            class="w-8 h-8 rounded-full border-2 transition-all duration-200 ease-in-out cursor-pointer"
            :class="[
              getCurrentColor('background') === bg.value 
                ? 'border-gray-500 scale-110 ring-2 ring-offset-2 ring-gray-300' 
                : 'border-gray-300 hover:scale-110'
            ]"
            :style="{ backgroundColor: bg.value }"
            :title="bg.name"
          >
            <span 
              v-if="getCurrentColor('background') === bg.value" 
              class="text-white text-xs"
            >
              ✓
            </span>
          </button>
        </div>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-3">
          Color de Texto
        </label>
        <div class="grid grid-cols-6 gap-2">
          <button
            v-for="text in textColors"
            :key="text.name"
            @click="setColor('text', text.value)"
            class="w-8 h-8 rounded-full border-2 transition-all duration-200 ease-in-out cursor-pointer"
            :class="[
              getCurrentColor('text') === text.value 
                ? 'border-gray-500 scale-110 ring-2 ring-offset-2 ring-gray-300' 
                : 'border-gray-300 hover:scale-110'
            ]"
            :style="{ backgroundColor: text.value }"
            :title="text.name"
          >
            <span 
              v-if="getCurrentColor('text') === text.value" 
              class="text-white text-xs"
            >
              ✓
            </span>
          </button>
        </div>
      </div>

    
      <div class="flex space-x-3">
        <button
          @click="resetScopeColors"
          class="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm cursor-pointer"
        >
          Resetear Ámbito
        </button>
        <button
          @click="resetAllColors"
          class="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm cursor-pointer"
        >
          Resetear Todo
        </button>
        <button
          @click="applyColors"
          class="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm cursor-pointer"
        >
          Aplicar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useColorManager } from '../composables/useColors'
const { primaryColor, backgroundColor, textColor } = useColorManager('content')
const { colorState, getEffectiveColor, setColor: setColorManager, resetScopeColors: resetScopeManager, resetAllColors: resetAllManager } = useColorManager()

const isOpen = ref(false)
const scope = ref('global')

const scopeOptions = [
  { value: 'global', label: 'Global' },
  { value: 'header', label: 'Header' },
  { value: 'sidebar', label: 'Sidebar' },
  { value: 'footer', label: 'Footer' },
  { value: 'content', label: 'Contenido' }
]

const primaryColors = [
  
  { name: 'Azul', value: '#3b82f6' },
   { name: 'Azul oscuro', value: '#3A11DF' },
  { name: 'Rojo', value: '#ef4444' },
  { name: 'Rosa intenso', value: '#EC1857' },  
  { name: 'Verde oliva', value: '#95C341' },  
  { name: 'Verde', value: '#10b981' },
  { name: 'Morado', value: '#8b5cf6' },
  { name: 'Amarillo', value: '#f59e0b' },
  { name: 'Rosa', value: '#ec4899' }
]

const backgroundColors = [
  { name: 'Blanco', value: '#ffffff' },
  { name: 'Gris Claro', value: '#f9fafb' },
  { name: 'Gris', value: '#f3f4f6' },
  { name: 'Gris Oscuro', value: '#1f2937' },
  { name: 'Azul claro', value: '#EAF5FA' },
  { name: 'Azul claro', value: '#F6F7ED' },
  { name: 'Azul claro', value: '#FAFCEE' }
  
]

const textColors = [
  { name: 'Negro', value: '#000000' },
  { name: 'Gris Oscuro', value: '#1f2937' },
  { name: 'Gris', value: '#4b5563' },
  { name: 'blanco', value: '#ffffff' },
 
]

// Métodos
const togglePanel = () => {
  isOpen.value = !isOpen.value
}

const setScope = (newScope) => {
  scope.value = newScope
}

const getCurrentColor = (type) => {
  return getEffectiveColor(scope.value, type)
}

const setColor = (type, value) => {
  setColorManager(scope.value, type, value)
}

const resetScopeColors = () => {
  resetScopeManager(scope.value)
}

const resetAllColors = () => {
  resetAllManager()
}

const applyColors = () => {
  isOpen.value = false
}
</script>