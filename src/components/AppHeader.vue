<script setup lang="ts">
import { ref } from 'vue';
import LoginForm from './LoginForm.vue';


const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

// Controle da visibilidade do card de login
const isLoginCardVisible = ref(false)

// Função para alternar a visibilidade do card
const toggleLoginCard = () => {
  isLoginCardVisible.value = !isLoginCardVisible.value
  console.log(isLoginCardVisible.value);
  
}

</script>


<template>

<nav class="fixed flex justify-between items-center pl-20 pr-20 pt-5 pb-2 bg-white  w-full">



    <a href="#" class="flex gap-3">
      <img width="75" height="75" src="https://img.icons8.com/bubbles/100/tooth.png" alt="tooth"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">OdontoSmart</span>
  </a>



    <ul class="flex flex-row p-4 mt-4 font-medium rounded-lg ">
    
      <li>
      <a @click.prevent="scrollToSection('home')" class="block py-2 px-3 text-black hover:text-blue-800 text-lg rounded cursor-pointer">
        Home
      </a>
    </li>

    <li>
      <a @click.prevent="scrollToSection('servico')" class="block py-2 px-3 text-black hover:text-blue-800 text-lg rounded cursor-pointer">
        Serviços
      </a>
    </li>

    <li>
      <a @click.prevent="scrollToSection('sobre')" class="block py-2 px-3 text-black hover:text-blue-800 text-lg rounded cursor-pointer">
        Sobre nós
      </a>
    </li>

    <li>
      <a @click.prevent="scrollToSection('contato')" class="block py-2 px-3 text-black hover:text-blue-800 text-lg rounded cursor-pointer">
        Contato
      </a>
    </li>

  </ul>




    <div class="flex gap-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <a class="text-[#03045e] hover:text-[#023e8a] hover:bg-[#e9ecef] font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 text-md rounded-lg px-4 py-2 text-center" @click="toggleLoginCard" >LOGIN / REGISTRO</a>
    </div>


    <transition name="fade">
      <LoginForm v-if="isLoginCardVisible"/>
    </transition>

    

</nav>

</template>
