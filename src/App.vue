<script setup lang="ts">
import PageHeader from "./components/PageHeader.vue";
import { onMounted, ref } from "vue";
import axiosClient from "./utils/axios";
import { Country } from "./interfaces/countryInterface";
import CountryCard from "./components/CountryCard.vue";

const countries = ref<Country[]>([]);
const busqueda = ref("");
const paisesFiltrados = ref<Country[]>([]);

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
        `,
      },
    });

    countries.value = response.data.data.countries;
    // Inicialmente, los países filtrados son todos los países
    paisesFiltrados.value = countries.value;
  } catch (err) {
    console.error("Error al obtener países:", err);
  }
};

const filtrarPaises = () => {
  paisesFiltrados.value = countries.value.filter((country) =>
    country.name.toLowerCase().includes(busqueda.value.toLowerCase())
  );
};

onMounted(() => {
  fetchCountries();
});
</script>

<template>
  <PageHeader></PageHeader>
  <div class="container max-w-screen-lg my-auto px-6">
    <div class="mb-8">
      <input
        type="text"
        class="border border-gray-300 rounded w-full p-1 px-4"
        placeholder="Busca el país"
        v-model="busqueda"
        @input="filtrarPaises"
      />
    </div>

    <CountryCard :countries="paisesFiltrados"></CountryCard>
  </div>
</template>
