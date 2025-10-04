<template>
  <Layout>
    <div class="flex flex-row">
      <div class="flex flex-col">
           <div class="w-full">
            <MainBanner></MainBanner>
        </div>
        <div class="lg:block hidden pt-10">
            <ProductPanel></ProductPanel>
        </div>
      </div>
      <div>
        <PanelOrder></PanelOrder>
      </div>
     
    </div>
  
  </Layout>
</template>

<script setup>
import PanelOrder from './components/PanelOrder.vue'
import Layout from './components/Layout.vue'
import MainBanner from './components/MainBanner.vue'
import ProductPanel from './components/ProductPanel.vue';



</script>