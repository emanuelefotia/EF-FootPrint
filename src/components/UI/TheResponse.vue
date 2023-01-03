<template>
    <v-row justify="center">
        <v-col align="center">
      <p>{{ results.co2e.toFixed(2) }}</p>
      <p>{{ (results.co2e / passengers).toFixed(2) }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    results: {},
    passengers: "",
  },
};
</script>
