<script setup lang="ts">
import { defineProps } from "vue";
import { Country } from "../interfaces/countryInterface";

interface Props {
  country: Country;
}
defineProps<Props>();
</script>


<template>
  <div class="sm:h-56 md:h-36">
    <img :src="`https://flagsapi.com/${country.code}/flat/64.png`" :alt="country.name" class="sm:h-56 md:h-36"  />
  </div>
  
  <h4 class="text-xl font-bold text-gray-500">{{ country.name }}</h4>
  <h4 class="text-xl font-light text-gray-500">{{ country.continent.name }}</h4>
</template>