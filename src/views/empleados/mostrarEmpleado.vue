<template>
  <div class="bg-emerald-200 h-screen">
    <navbar-vue></navbar-vue>
    <div class="grid md:grid-cols-2 grid-cols-1 mt-3">
      <div class="flex justify-center">
        <h2 class="text-4xl font-bold mr-5 flex items-center">
          Detalle empleado
        </h2>
      </div>
      <div class="flex justify-end">
        <router-link
          class="
            w-40
            justify-center
            mr-10
            bg-slate-600
            h-10
            px-3
            rounded-md
            flex
            items-center
            text-white
          "
          :to="{ name: 'editar-empleado', params: { id: this.$route.params.id }}"
          >Editar empleado</router-link
        >
        <a
          class="
            w-40
            justify-center
            mr-10
            bg-slate-600
            h-10
            px-3
            rounded-md
            flex
            items-center
            text-white
          "
          :href="'http://127.0.0.1:8000/api/empleados/pdf-empleado/' + empleado.id" 
          >Generar reporte</a
        >
      </div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8">
      <div class="block">
        <img class="h-56 mx-auto " src="@/assets/img/cantocu.png" alt="cantocu">
      </div>
      <div class="md:text-left">
        <p class="font-semibold italic "> {{ empleado.documento }} </p>
        <p class="font-semibold italic mt-5"> {{ empleado.nombre }}  </p>
        <p class="font-semibold italic mt-5"> {{ empleado.apellidos }}  </p>
        <p class="font-semibold italic mt-5"> {{ empleado.telefono }}  </p> 
        <p class="font-semibold italic mt-5"> {{ empleado.direccion }}  </p>
      </div>
      <div class="md:text-left">
        <p class="font-semibold italic "> {{ empleado.nomContrato }}</p>
        <p class="font-semibold italic mt-5"> {{ empleado.sueldo }}</p>
        <p class="font-semibold italic mt-5"> {{ empleado.duracion }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import navbarVue from "@/components/navbar.vue";
export default {
  name: "detalle-empleado",
  components: {
    navbarVue,
  },
  data() {
    return {
      empleado: [],
    }
  },
  mounted() {
    this.detalleEmpleado();
  },
  methods: {
    async detalleEmpleado() {
      const id = this.$route.params.id;
      await this.$store.dispatch('detalle_empleado', id);
      this.empleado = this.$store.getters.empleado;
    }
  }
};
</script>

<style>
</style>