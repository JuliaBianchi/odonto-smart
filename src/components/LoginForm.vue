<template>
  <div class="absolute h-screen bg-black opacity-70 inset-0 z-0"></div>

  <div
    class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
  >

  <button
          type="button"
          class="text-[#03045e] hover:text-[#023e8a] hover:bg-[#e9ecef] font-bold text-md rounded-lg px-4 py-2 text-center focus:border-4 focus:border-b-[#023e8a] focus:rounded-lg focus:border-t-[#fdfdfd] focus:border-x-[#fdfdfd]"
        >
          Fechar
        </button>

    <div class="flex justify-around pb-6">
      <div
        class="flex gap-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
      >
        <button
          type="button"
          class="text-[#03045e] hover:text-[#023e8a] hover:bg-[#e9ecef] font-bold text-md rounded-lg px-4 py-2 text-center focus:border-4 focus:border-b-[#023e8a] focus:rounded-lg focus:border-t-[#fdfdfd] focus:border-x-[#fdfdfd]"
        >
          Login
        </button>
      </div>

      <div
        class="flex gap-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
      >
        <button
          type="button"
          class="text-[#03045e] hover:text-[#023e8a] hover:bg-[#e9ecef] font-bold text-md rounded-lg px-4 py-2 text-center focus:border-4 focus:border-b-[#023e8a] focus:rounded-lg focus:border-t-[#fdfdfd] focus:border-x-[#fdfdfd]"
        >
          Registro
        </button>
      </div>
    </div>

    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900"
          >E-mail</label
        >
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div class="mb-5">
        <label
          for="password"
          placeholder="********"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Senha</label
        >
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
        />
      </div>
      
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Entrar
      </button>
    </form>
  </div>
</template>
