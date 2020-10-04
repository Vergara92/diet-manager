<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="kcal"
      :label="`Kcal / ${measureType}`"
      required
    ></v-text-field>

    <v-text-field
      v-model="hydrates"
      :label="`Hidratos / ${measureType}`"
      required
    ></v-text-field>

    <v-text-field
      v-model="proteins"
      :label="`Proteinas / ${measureType}`"
      required
    ></v-text-field>

    <v-text-field
      v-model="fats"
      :label="`Grasas / ${measureType}`"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Medición"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Acepta para continuar']"
      label="¿Seguro que quieres introducir el alimento?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Introducir Alimento
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Borrar campos
    </v-btn>
  </v-form>
</template>

<script>
import { db } from '@/services/firebase'
import Food from '@/models/Food'

export default {
  data: () => ({
    valid: true,
    name: '',
    kcal: '',
    hydrates: '',
    proteins: '',
    fats: '',
    select: 'gramos',
    items: [
      'gramos',
      'unidades'
    ],
    checkbox: false
  }),
  computed: {
    measureType () {
      const measures = {
        gramos: 'gramos',
        unidades: 'unidad'
      }

      return measures[this.select]
    },
    foodModel () {
      return {
        name: this.name,
        kcal: this.kcal,
        hydrates: this.hydrates,
        proteins: this.proteins,
        fats: this.fats,
        unity: this.select
      }
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate() === false) return

      this.createFood()
    },
    reset () {
      this.$refs.form.reset()
      this.select = this.items[0]
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    createFood () {
      db.collection('Foods').add(new Food(this.foodModel).getObject()).then(() => {
        alert('¡Alimento creado!')
        this.reset()
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
