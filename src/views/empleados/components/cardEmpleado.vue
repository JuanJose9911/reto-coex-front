<template>
  <div class="w-80  block mt-4 mx-10 p-4 rounded-lg border-4 border-double border-orange-400">
    <img class="h-24 px-8 mx-auto" src="@/assets/img/cantocu.png" alt="empleado">
    <p class="mx-auto">{{ empleado.nombre }} {{ empleado.apellidos }}</p>
    <p class="mx-auto">{{ empleado.tipoContrato }}</p>
    <div class="flex justify-center">
        <routerLink class="w-1/3 bg-slate-700 mx-2 text-white rounded-md px-1" :to="{ name: 'detalle-empleado', params: { id: this.empleado.id}}">detalle</routerLink>
        <routerLink class="w-1/3 bg-slate-700 mx-2 text-white rounded-md px-1" :to="{ name: 'editar-empleado', params: { id: this.empleado.id}}">edit</routerLink>
        <button class="w-1/3 bg-slate-700 mx-2 text-white rounded-md px-1" @click="eliminarEmpleado(empleado.id)">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-empleado',
  props:{
    empleado: {
      type: Object,
      default: null
    }
  },
  methods: {
    async eliminarEmpleado(id){
      await this.$store.dispatch('eliminar_empleado', id)
    }
  }
}
</script>

<style>

</style>