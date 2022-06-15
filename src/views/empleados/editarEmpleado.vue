<template>
  <div class="bg-emerald-200 h-screen">
    <navbar-vue></navbar-vue>
    <form action="">
        <div class="flex justify-end my-5">
            <h2 class="text-4xl font-bold mr-5 flex items-center">Editar Empleado</h2>
            <button class="mr-10 bg-slate-600 h-10 px-3 rounded-md flex items-center text-white" @click="editarEmpleado">Editar empleado</button>
        </div>
        <div class="mt-4">
            <div class="grid md:grid-cols-2 grid-cols-1 w-screen">
                <div class="mx-auto text-left">
                    <label for="Documento">Documento</label>
                    <input required maxlength="12" class="rounded-md h-7 w-[300px] px-3" v-model="empleado.documento" type="text" name="Documento" id="Documento" placeholder="Documento">

                    <label for="Nombres">Nombres</label>
                    <input required maxlength="45" class="rounded-md h-7 w-[300px] px-3" v-model="empleado.nombre" type="text" name="Nombres" id="Nombres" placeholder="Nombres">

                    <label for="Apellidos">Apellidos</label>
                    <input required maxlength="45" class="rounded-md h-7 w-[300px] px-3" v-model="empleado.apellidos" type="text" name="Apellidos" id="Apellidos" placeholder="Apellidos">
                </div>
                <div class="mx-auto text-left">
                    <label for="Telefono">Telefono</label>
                    <input required class="rounded-md h-7 w-[300px] px-3" v-model="empleado.telefono" type="tel" name="Telefono" id="Telefono" placeholder="Telefono">

                    <label for="Direccion">Direccion</label>
                    <input required maxlength="60" class="rounded-md h-7 w-[300px] px-3" v-model="empleado.direccion" type="text" name="Direccion" id="Direccion" placeholder="Direccion">
                </div>
            </div>
            <div class="">
                <h2 class="text-4xl font-bold mr-5 flex items-center mt-10 px-10 justify-center"> Contrato </h2>
                <div class="grid md:grid-cols-2 grid-cols-1 w-screen">
                    <div class="mx-auto text-left">
                        <label for="tipo_contrato">Tipo de contrato</label>
                        <select required class="rounded-md h-7 w-[300px] px-3" name="tipo_contrato" v-model="empleado.tipoContrato" id="tipo_contrato">
                            <option v-for="(contrato, key) in contratos"
                                    :key="key"
                                    :value="contrato.id"
                                >
                                    {{contrato.nombre}}
                            </option>
                        </select>

                        <!-- Poner un v-if -->
                        <label for="Duracion">Duracion</label>
                        <input required  maxlength="45" class="rounded-md h-7 w-[300px] px-3" v-model="empleado.duracion" type="text" name="Duracion" id="Duracion" placeholder="Duracion">
                    </div>
                    <div class="mx-auto text-left">
                        <label for="Sueldo">Sueldo</label>
                        <input required class="rounded-md h-7 w-[300px] px-3" v-model="empleado.sueldo" type="text" name="Sueldo" id="Sueldo" placeholder="Sueldo">
                    </div>
                </div>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
import navbarVue from '@/components/navbar.vue'
export default {
    name: 'editar-empleado',
    components: {
        navbarVue
    },
    data() {
        return {
            contratos: [],
            empleado: [],
        }
    },
    mounted() {
        this.listarContratos();
    },
    methods: {
        async listarContratos(){
            await this.$store.dispatch('obtener_contratos');
            await this.$store.dispatch('detalle_empleado', this.$route.params.id);
            this.empleado = await this.$store.getters.empleado;
            this.contratos = await this.$store.getters.contratos;
        },

        async editarEmpleado(){
            const form = {
                documento: this.empleado.documento,
                nombre: this.empleado.nombre,
                apellidos: this.empleado.apellidos,
                telefono: this.empleado.telefono,
                direccion: this.empleado.direccion,
                tipo_contrato_id: this.empleado.tipoContrato,
                sueldo: this.empleado.sueldo,
                duracion: this.empleado.duracion,
                id: this.$route.params.id
            };
            const res = await this.$store.dispatch('editar_empleado', form);
            if ( !res ) console.log(error);

            this.$router.push({ name: 'empleados'});
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
