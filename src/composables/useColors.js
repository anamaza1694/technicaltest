import { ref, reactive,watch } from 'vue'


const defaultColors = {
  global: {
    primary: '#3b82f6',   
    background: '#f9fafb', 
    text: '#1f2937'        
  },
  header: {
    primary: null,
    background: null,
    text: null
  },
  sidebar: {
    primary: null,
    background: null,
    text: null
  },
  content: {
    primary: null,
    background: null,
    text: null
  },
  footer: {
    primary: null,
    background: null,
    text: null
  },
}


const colorState = reactive(JSON.parse(JSON.stringify(defaultColors)))


const colorUpdateTrigger = ref(0)


function loadSavedColors() {
  if (typeof window !== 'undefined') {
    const savedColors = localStorage.getItem('appColors')
    if (savedColors) {
      try {
        const colors = JSON.parse(savedColors)      
        
        Object.keys(colors).forEach(scopeName => {
          if (colorState[scopeName]) {
            Object.keys(colors[scopeName]).forEach(colorType => {
              if (colorState[scopeName][colorType] !== undefined) {
                colorState[scopeName][colorType] = colors[scopeName][colorType]
              }
            })
          }
        })
      } catch (error) {
        console.error('Error cargando colores:', error)
      }
    }
  }
}

// Guardar colores
function saveColors() {
  if (typeof window !== 'undefined') {
    localStorage.setItem('appColors', JSON.stringify(colorState))
  }
}

// CARGAR COLORES INMEDIATAMENTE
loadSavedColors()

export function useColorManager() {
  const getEffectiveColor = (scopeName, type) => {
    const scopeColors = colorState[scopeName]    
    if (scopeColors[type] !== null && scopeColors[type] !== undefined) {
      return scopeColors[type]
    }    
    return colorState.global[type]
  }

  const setColor = (scope, type, value) => {
    colorState[scope][type] = value
    saveColors()
    colorUpdateTrigger.value++
  }

  const resetScopeColors = (scope) => {
    // Usar los valores por defecto correctos para cada ámbito
    const defaultScopeColors = JSON.parse(JSON.stringify(defaultColors[scope]))
    Object.keys(colorState[scope]).forEach(key => {
      colorState[scope][key] = defaultScopeColors[key]
    })
    saveColors()
    colorUpdateTrigger.value++
  }

  const resetAllColors = () => {
    // Restaurar TODOS los valores por defecto
    const freshColors = JSON.parse(JSON.stringify(defaultColors))
    Object.keys(freshColors).forEach(scopeName => {
      Object.keys(freshColors[scopeName]).forEach(colorType => {
        colorState[scopeName][colorType] = freshColors[scopeName][colorType]
      })
    })
    saveColors()
    colorUpdateTrigger.value++
  }

  return {
    colorState,
    colorUpdateTrigger,
    getEffectiveColor,
    setColor,
    resetScopeColors,
    resetAllColors
  }
}

export function useScopeColors(scope) {
  const { colorState, colorUpdateTrigger, getEffectiveColor } = useColorManager()
  
  const primaryColor = ref(getEffectiveColor(scope, 'primary'))
  const backgroundColor = ref(getEffectiveColor(scope, 'background'))
  const textColor = ref(getEffectiveColor(scope, 'text'))

  // Watcher que reacciona a cambios en el estado global
  watch(colorUpdateTrigger, () => {
    primaryColor.value = getEffectiveColor(scope, 'primary')
    backgroundColor.value = getEffectiveColor(scope, 'background')
    textColor.value = getEffectiveColor(scope, 'text')
  })

  // También observar cambios directos en colorState
  watch(
    () => colorState[scope],
    () => {
      primaryColor.value = getEffectiveColor(scope, 'primary')
      backgroundColor.value = getEffectiveColor(scope, 'background')
      textColor.value = getEffectiveColor(scope, 'text')
    },
    { deep: true }
  )

  return {
    primaryColor,
    backgroundColor,
    textColor
  }
}