<template>
  <aside :class="[
      'transition-all duration-300 ease-in-out h-screen fixed left-0 top-0 z-50 shadow-lg',     
      isCollapsed ? 'w-18' : 'w-64',    
      isMobile ? (sidebarOpen ? 'translate-x-0' : '-translate-x-full') : ''
    ]"
    :style="{
      backgroundColor: backgroundColor,
      color: textColor
    }"
  >
  
    <div 
      class="p-4 flex items-center justify-between"
      :style="{ borderColor: borderColor }"
    >
      <h1 v-if="!isCollapsed" class="text-xl font-bold"></h1>
      <img v-if="!isCollapsed" src="/logo.png" class="w-[50%]"> 
      <button
        @click="toggleSidebar"
        class="p-2 rounded-lg transition-colors"
        :style="{ 
          backgroundColor: hoverBackgroundColor,
          color: textColor
        }"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            v-if="isCollapsed" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    
    <nav class="mt-6">
      <ul class="space-y-2 px-2">
        <li v-for="item in menuItems" :key="item.name">
          <a
            :href="item.href"
            class="flex items-center p-3 rounded-lg transition-colors group"
            :style="{ 
              backgroundColor: isHovered === item.name ? hoverBackgroundColor : 'transparent',
              color: isHovered === item.name ? primaryColor : textColor
            }"
            @mouseenter="isHovered = item.name"
            @mouseleave="isHovered = null"
            @click="menuClick(item.name)"
          >
          
            <svg 
              class="w-8 h-8 transition-colors" 
              viewBox="0 -960 960 960"
              :style="{ 
                fill: isHovered === item.name ? primaryColor : textColor 
              }"
            >
              <path :d="item.icon" />
            </svg>
            <span v-if="!isCollapsed" class="ml-3 transition-colors">
              {{ item.name }}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useScopeColors } from '../composables/useColors'
import { useNavigation } from '../composables/useNavigation'


defineProps({
  sidebarOpen: {
    type: Boolean,
    default: false
  },
  isMobile: {
    type: Boolean,
    default: false
  }
})

const { primaryColor, backgroundColor, textColor } = useScopeColors('sidebar')
const { setCurrentPage } = useNavigation()
const isCollapsed = ref(false)
const isHovered = ref(null)

const borderColor = computed(() => {
  return primaryColor.value + '40' 
})

const hoverBackgroundColor = computed(() => {
  return primaryColor.value + '20'
})

const menuItems = [
  { 
    name: 'Inicio', 
    href: '#', 
    icon: 'M242-202h154v-233.5h168V-202h154v-357.5L480-740 242-559.67V-202Zm-25.5 25.5v-396L480-772l263.5 199.83v395.67h-205V-410h-117v233.5h-205ZM480-471Z'
  },
  { 
    name: 'Dashboard', 
    href: '#', 
    icon: 'M546.5-599v-184.5h237V-599h-237Zm-370 105v-289.5h237V-494h-237Zm370 317.5V-466h237v289.5h-237Zm-370 0V-361h237v184.5h-237Zm25.5-343h186V-758H202v238.5ZM572-202h186v-238.5H572V-202Zm0-422.5h186V-758H572v133.5ZM202-202h186v-133.5H202V-202Zm186-317.5Zm184-105Zm0 184Zm-184 105Z'
  },
  { 
    name: 'Órdenes', 
    href: '#', 
    icon: 'M250-177q-19 0-34.75-11t-20.75-30l-83-291.5q-4-13.56 4.75-24.78t23.25-11.22h186l131.43-199.91q4.84-6.65 10.76-9.62Q473.6-758 481.5-758q7.11 0 13.05 3.5 5.95 3.5 10.31 9.82L634.5-545.5h186.73q13.62 0 22.95 11.25Q853.5-523 849-509.5L763.5-218q-5 19-20.75 30T708-177H250Zm-3.85-25.5H714q11 0 19-6.5t11-17.5L825.5-520h-691l81.65 293.5q3 11 11 17.5t19 6.5ZM480.02-336q9.98 0 17.73-7.77t7.75-17.75q0-9.98-7.77-17.73T479.98-387q-9.98 0-17.73 7.77t-7.75 17.75q0 9.98 7.77 17.73t17.75 7.75ZM357-545.5h246.5L480.5-735 357-545.5Zm123 184Z'
  },
  { 
    name: 'Configuración', 
    href: '#', 
    icon: 'm419-137-14-110.44q-21.5-6.06-47.75-20.31T313.87-298L213-255l-61.5-108 88-66q-2.5-11.98-3.75-24.49Q234.5-466 234.5-479q0-10.5 1.5-23.25l3.5-29.75-88-66L213-703.5 314-661q19.5-16.5 43-30.25t47-21.25l15-111h122.5l14 111.5q26 9 45.75 20.75T642-661l105.5-42.5L809-598l-93.5 70.04Q719-514 719.75-503t.75 22.75q0 10.75-1 22.09t-4 28.16l91 67L745-255l-103-44.5q-20.5 18-41 30.5t-45.5 20.5l-14 111.5H419Zm21.18-25.5h77.42L533.22-272q29.28-8 52.03-21t48.25-38L734-287.5l39.5-67.26L685-421q4.5-18 6.25-31.84t1.75-27.41q0-14.75-1.5-27.25T685-537l90.5-68.5-39-67.5-104 43.5q-16-18-46.5-36t-54-23L520-798h-80l-11.5 108.54q-31 6.46-54.75 19.46t-50.25 39.5L224-673l-40 67.5 87 64.5q-5 13.5-7 29.32t-2 32.15q0 15.03 1.75 29.53 1.75 14.5 5.75 29.5L184-355l39.86 67.5 98.64-42q24.5 24.5 49 38t55.78 21l12.9 108Zm36.81-232q36.01 0 60.76-24.78 24.75-24.77 24.75-60.75 0-35.97-24.77-60.72T477-565.5q-36 0-60.75 24.78-24.75 24.77-24.75 60.75 0 35.97 24.75 60.72t60.74 24.75Zm3.01-86Z'
  },
  { 
    name: 'Salir', 
    href: '#', 
    icon: 'M228.6-172.83q-22.74 0-38.84-16.1-16.09-16.09-16.09-39.07v-503.17q0-22.97 16.09-39.07 16.1-16.09 38.84-16.09h252.57v23.16H228.83q-12 0-22 10t-10 22V-228q0 12 10 22t22 10h252.34v23.17H228.6Zm440.57-190L652-378.33 741.67-468H370.5v-23.17h371.17L652-580.83l16.5-17 117.83 118.16-117.16 116.84Z' 
  },
]

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const menuClick = (pageName) => {
    if(pageName!='Salir')
        setCurrentPage(pageName) 
}

defineExpose({
  isCollapsed
})
</script>