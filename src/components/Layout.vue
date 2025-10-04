<template>
  <div class="min-h-screen flex bg-gray-100"
    :style="{
      backgroundColor: backgroundColor,
    }"
  >
    <!-- Overlay para móvil -->
    <div 
      v-if="isMobile && sidebarOpen" 
      class="fixed inset-0 bg-black opacity-20 z-40 md:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- Sidebar -->
    <Sidebar ref="sidebarRef" :sidebar-open="sidebarOpen" :is-mobile="isMobile" @close="sidebarOpen = false" />
    
    <!-- Contenido principal - SIN márgenes en móvil -->
    <div class="flex-1 flex flex-col w-full transition-all duration-300" 
         :class="isMobile ? 'ml-0' : sidebarWidthClass">
      <!-- Header -->
      <Header @toggle-sidebar="toggleSidebar" />
      
      <!-- Contenido -->
      <main class="flex-1 p-6 overflow-auto">
        <div class="max-w-7xl mx-auto">
          <slot />
        </div>
      </main>
      
      <!-- Footer -->
      <Footer />
    </div>

    <!-- Panel de colores -->
    <PanelColor />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import PanelColor from './PanelColor.vue'
import { useScopeColors } from '../composables/useColors'

const { backgroundColor } = useScopeColors('content')
const sidebarRef = ref(null)
const sidebarOpen = ref(false)
const isMobile = ref(false)

// Detectar si es móvil
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const toggleSidebar = () => {
  if (isMobile.value) {
    sidebarOpen.value = !sidebarOpen.value
  } else if (sidebarRef.value) {
    sidebarRef.value.toggleSidebar()
  }
}

// Usar clases de Tailwind en lugar de style inline
const sidebarWidthClass = computed(() => {
  if (!sidebarRef.value) return 'ml-64'
  
  if (isMobile.value) {
    return 'ml-0' // En móvil, sin margen
  } else {
    return sidebarRef.value.isCollapsed ? 'ml-16' : 'ml-64'
  }
})

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>