<template>
  <div>
    <nav class="flex items-center justify-start bg-slate-300">
      <img src="@/assets/img/logoCoex.svg" alt="logo" />
      <router-link to="/empleados" class="ml-96 bg-slate-50  h-10 px-3 rounded-md flex align-middle items-center"> Empleados </router-link>
      <router-link to="/tipo-contratos" class="ml-20 bg-slate-50  h-10 px-3 rounded-md flex align-middle items-center">Tipo contratos</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
</style>