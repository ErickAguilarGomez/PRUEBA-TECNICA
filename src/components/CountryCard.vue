<script setup lang="ts">
import { defineProps } from "vue";
import { Country } from "../interfaces/countryInterface"; 

interface Props {
  countries: Country[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
    <div 
      v-for="country in countries" 
      :key="country.code" 
      class="border border-black-300 rounded p-3"
    >
      {{ country.name }}
    </div>
  </div>
</template>
