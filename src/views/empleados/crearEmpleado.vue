<template>
  <div class="bg-emerald-200 h-screen">
    <navbar-vue></navbar-vue>
    <div class="flex justify-end my-5">
        <h2 class="text-4xl font-bold mr-5 flex items-center">Registrar Empleado</h2>
        <button class="mr-10 bg-slate-600 h-10 px-3 rounded-md flex items-center text-white" @click="crearEmpleado">Crear empleado</button>
    </div>
    <div class="mt-4">
        <div class="grid md:grid-cols-2 grid-cols-1 w-screen">
            <div class="mx-auto text-left">
                <label for="Documento">Documento</label>
                <input class="rounded-md h-7 w-[300px] px-3" v-model="documento" type="text" name="Documento" id="Documento" placeholder="Documento">

                <label for="Nombres">Nombres</label>
                <input class="rounded-md h-7 w-[300px] px-3" v-model="nombre" type="text" name="Nombres" id="Nombres" placeholder="Nombres">

                <label for="Apellidos">Apellidos</label>
                <input class="rounded-md h-7 w-[300px] px-3" v-model="apellidos" type="text" name="Apellidos" id="Apellidos" placeholder="Apellidos">
            </div>
            <div class="mx-auto text-left">
                <label for="Telefono">Telefono</label>
                <input class="rounded-md h-7 w-[300px] px-3" v-model="telefono" type="text" name="Telefono" id="Telefono" placeholder="Telefono">

                <label for="Direccion">Direccion</label>
                <input class="rounded-md h-7 w-[300px] px-3" v-model="direccion" type="text" name="Direccion" id="Direccion" placeholder="Direccion">
            </div>
        </div>
        <div class="">
            <h2 class="text-4xl font-bold mr-5 flex items-center mt-10 px-10 justify-center"> Contrato </h2>
            <div class="grid md:grid-cols-2 grid-cols-1 w-screen">
                <div class="mx-auto text-left">
                    <label for="tipo_contrato">Tipo de contrato</label>
                    <select class="rounded-md h-7 w-[300px] px-3" name="tipo_contrato" v-model="tipo_contrato_id" id="tipo_contrato">
                        <option v-for="(contrato, key) in contratos"
                            :key="key"
                            :value="contrato.id">{{contrato.nombre}}</option>
                    </select>

                    <!-- Poner un v-if -->
                    <label for="Duracion">Duracion</label>
                    <input class="rounded-md h-7 w-[300px] px-3" v-model="duracion" type="text" name="Duracion" id="Duracion" placeholder="Duracion">
                </div>
                <div class="mx-auto text-left">
                    <label for="Sueldo">Sueldo</label>
                    <input class="rounded-md h-7 w-[300px] px-3" v-model="sueldo" type="text" name="Sueldo" id="Sueldo" placeholder="Sueldo">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import navbarVue from '@/components/navbar.vue'
export default {
    name: 'crear-empleado',
    components: {
        navbarVue
    },
    data() {
        return {
            contratos: [],
            documento: '',
            nombre: '',
            apellidos: '',
            telefono: '',
            direccion: '',
            tipo_contrato_id: '',
            sueldo: '',
            duracion: ''
        }
    },
    mounted() {
        this.listarContratos();
    },
    methods: {
        async listarContratos(){
            await this.$store.dispatch('obtener_contratos');
            this.contratos = await this.$store.getters.contratos;
        },

        async crearEmpleado(){
            const form = {
                documento: this.documento,
                nombre: this.nombre,
                apellidos: this.apellidos,
                telefono: this.telefono,
                direccion: this.direccion,
                tipo_contrato_id: this.tipo_contrato_id,
                sueldo: this.sueldo,
                duracion: this.duracion
            }
            const res = await this.$store.dispatch('crear_empleado', form)
            if ( !res ) console.log(error);

            this.$router.push({ name: 'empleados'})
        }
    }
}
</script>

<style scoped>
label{
    display: block;
    margin-top: 20px;
    font-weight: bold;
}

</style>
