<script setup lang="ts">
import PageHeader from "./components/PageHeader.vue";
import { onMounted, ref } from "vue";
import axiosClient from "./utils/axios";
import { Country } from "./interfaces/countryInterface"; 
import CountryCard from "./components/CountryCard.vue"
const countries = ref<Country[]>([]);

const fetchCountries = async () => {
  try {
    const response = await axiosClient.get("/graphql", {
      params: {
        query: `
          query {
            countries {
              code
              name
              continent {
                name
              }
              languages {
                name
              }
              currency
              states {
                name
              }
            }
          }
        `
      }
    });

    countries.value = response.data.data.countries;
   
  } catch (err) {
    console.error("Error al obtener país:", err);
  }
};

onMounted(() => {
  fetchCountries();
});
</script>


<template>
  <PageHeader></PageHeader>
  <div class="container max-w-screen-lg my-auto px-6">
    <CountryCard :countries="countries"></CountryCard>
  </div>
</template>


