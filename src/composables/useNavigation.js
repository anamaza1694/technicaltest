import { ref } from 'vue'


const currentPage = ref('Inicio')

export function useNavigation() {

  const setCurrentPage = (pageName) => {
   
      currentPage.value = pageName    
   
  }

  return {
    currentPage,
    setCurrentPage
  }
}