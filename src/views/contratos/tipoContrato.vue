<template>
  <div class="bg-emerald-200 h-screen">
    <navbar-vue></navbar-vue>
    <div class="flex justify-center my-5">
      <h2 class="text-4xl font-bold mr-5 flex items-center">Tipo de contratos</h2>
    </div>
    <div class="flex justify-center">
      <table class="table-auto border-2 border-dotted border-black">
        <thead class="bg-white rounded-md">
          <tr>
            <th>Id contrato</th>
            <th>nombre</th>
          </tr>
        </thead>
        <tbody class="bg-emerald-800 text-cyan-300">
          <tr class="border-2 " v-for="(contrato, key) in contratos" :key="key">
            <td>{{contrato.id}}</td>
            <td>{{contrato.nombre}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import navbarVue from "@/components/navbar.vue";
export default {
  name: "contratos",
  components: {
    navbarVue,
  },
  data() {
    return {
      contratos: []
    }
  },
  mounted() {
    this.listarContratos();
  },
  methods: {
    async listarContratos(){
      await this.$store.dispatch('obtener_contratos');
      this.contratos = await this.$store.getters.contratos;
    }
  }
};
</script>

<style>
</style>