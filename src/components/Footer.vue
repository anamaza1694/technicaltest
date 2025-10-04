<template>
  <footer class="py-4 mt-auto border border-t border-l-0"
    :style="{
      backgroundColor: backgroundColor,
      borderColor: borderColor
    }"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Información de copyright -->
        <div class="mb-2 md:mb-0">
          <p class="text-sm text-gray-300" 
           :style="{           
            color: textColor
          }"
          >
            &copy; {{ currentYear }} Mi App. Todos los derechos reservados.
          </p>
        </div>
        
        <!-- Enlaces del footer -->
        <div class="flex space-x-6">
          <a 
            v-for="link in footerLinks" 
            :key="link.name"
            :href="link.href" 
            class="text-gray-300 hover:text-white text-sm transition-colors"
             :style="{ 
          
            color: textColor
          }"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed} from 'vue'
import { useScopeColors } from '../composables/useColors'
const { primaryColor, backgroundColor, textColor } = useScopeColors('footer')

const currentYear=ref('2025')
const footerLinks = [
  { name: 'Términos', href: '#' },
  { name: 'Privacidad', href: '#' },
  { name: 'Contacto', href: '#' }
]
const borderColor = computed(() => {
  return primaryColor.value + '30'
})


</script>