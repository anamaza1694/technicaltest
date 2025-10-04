<template>
  <Layout>
    <div class="flex flex-row">
      <div class="flex flex-col">
          <div class="w-full ">
            <MainBanner></MainBanner>
          </div>
          <div class="pt-10 mt-80 md:mt-0 md:pt-10">
            <div class="mt-40 md:mt-0">
                <ProductPanel></ProductPanel>
            </div>            
          </div>
          <div class="pt-10">
            <Promotions></Promotions>
          </div>
      </div>
     
    
    </div>
  
  </Layout>
</template>

<script setup>

import Layout from './components/Layout.vue'
import MainBanner from './components/MainBanner.vue'
import ProductPanel from './components/ProductPanel.vue';
import Promotions from './components/Promotions.vue';


</script>