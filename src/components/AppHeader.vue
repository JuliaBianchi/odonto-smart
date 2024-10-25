
<template>

<nav class=" flex justify-between items-center pl-20 pr-20 pt-5 pb-2 bg-white fixed w-full">

  <container>

    <a href="#" class="flex gap-3">
      <img width="75" height="75" src="https://img.icons8.com/bubbles/100/tooth.png" alt="tooth"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">OdontoSmart</span>
  </a>

  </container>

  <container>

    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
      <li>
        <router-link class=" block py-2 px-3 text-black hover:text-blue-800 text-lg rounded" to="/" >Home</router-link>
      </li>
      
      <li>
        <router-link class="block py-2 px-3 text-black hover:text-blue-800 text-lg rounded" to="/servicos">Serviços</router-link>
      </li>
      <li>
        <router-link class="block py-2 px-3 text-black hover:text-blue-800 text-lg rounded" to="/sobre">Sobre nós</router-link>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-black hover:text-blue-800 text-lg rounded">Contato</a>
      </li>
    </ul>

</container>

  <container>

    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white bg-[#03045e] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">LOGIN</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 " aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>

  </container>
  
</nav>
  
</template>
