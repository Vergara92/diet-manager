<template>
    <v-app id="inspire">
      <v-main>
        <v-container>
          <h1>Alimentos</h1>
          <v-row justify="space-between">
            <v-col
              cols="12"
              sm="5"
            >
              <h3>¿Quieres añadir uno?</h3>
              <food-adder-form />
            </v-col>
            <v-col cols="12" sm="6">
              <v-container>
                <v-row>
                  <v-col
                    v-for="food in foodList"
                    :key="food.name"
                    cols="12"
                    md="6"
                    lg="4"
                  >
                    <v-expand-x-transition>
                      <v-card elevation="5" height="275" outlined shaped>
                        <v-card-title>{{ food.name }}</v-card-title>
                        <v-card-text>
                          <p> Kcal: {{ food.kcal }} </p>
                          <p> Hidratos {{ food.hydrates }}g </p>
                          <p> Proteinas: {{ food.proteins }}g </p>
                          <p> Grasas: {{ food.fats }}g </p>
                        </v-card-text>
                      </v-card>
                    </v-expand-x-transition>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
  </v-app>
</template>

<script>
import FoodAdderForm from '@/components/FoodAdderForm.vue'
import Food from '@/models/Food'
import { db } from '@/services/firebase'

export default {
  name: 'diet-creator',
  components: {
    FoodAdderForm
  },

  data () {
    return {
      foodList: []
    }
  },

  created () {
    db.collection('Foods').onSnapshot((snapshotChange) => {
      this.foodList = []

      snapshotChange.forEach((doc) => {
        this.foodList.push(new Food(doc.data()))
      })
    })
  }
}
</script>

<style scoped>
.v-card__title {
  word-break: break-word;
}
</style>
