<template>
  <div class="bg-emerald-200 h-full">
    <navbar-vue></navbar-vue>
    <div class="flex flex-wrap justify-end my-5">
      <h2 class="text-4xl font-bold mr-5 flex items-center">Lista empleados</h2>
      <router-link
        class="
          mr-10
          bg-slate-600
          h-10
          px-3
          rounded-md
          flex
          items-center
          text-white
        "
        to="/crear-empleado"
        >Crear empleado</router-link
      >
      <router-link
        class="
          mr-10
          bg-slate-600
          h-10
          px-3
          rounded-md
          flex
          items-center
          text-white
        "
        to="http://127.0.0.1:8000/api/empleados/pdf-empleados"
        >Generar reporte</router-link
      >
    </div>
    <div class="border-t-4 border-orange-300 flex-wrap flex">
      <card-empleado-vue
        v-for="(empleado, key) in empleados"
        :key = "key"
        :empleado="empleado"
      ></card-empleado-vue>
    </div>
  </div>
</template>

<script>
import navbarVue from "@/components/navbar.vue";
import cardEmpleadoVue from "./components/cardEmpleado.vue";
export default {
  name: "empleados",
  components: {
    navbarVue,
    cardEmpleadoVue,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.listarEmpleados();
  },
  computed: {
    empleados(){
      return this.$store.state.empleados.empleados
    }
  },
  methods: {
    async listarEmpleados() {
      try {
        await this.$store.dispatch("obtener_empleados");
      } catch (error) {
        console.log(error);
      }
    },

    async generarReporte(){
      await this.$store.dispatch('reporte_general');
    }
  },
};
</script>

<style>
</style>