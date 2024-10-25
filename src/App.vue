<script setup lang="ts">

import AppHeader from './components/AppHeader.vue'
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import HomeView from './views/HomeView.vue';
import ServicesView from './views/ServicesView.vue';


</script>

<template>
  
  <AppHeader/>

  <HomeView id="home"/>

  <ServicesView id="servico"/>

  <AboutView id="sobre"/>

  <ContactView id="contato"/>
  

</template>
