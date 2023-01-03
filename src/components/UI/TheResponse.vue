<template>
  <v-row justify="center">
    <v-col align="center">
      <p class="font-weight-bold fs-5" >
        Emissioni totali di <span>CO</span>2<span>E</span>:
        <span class="underline"> {{ results.co2e.toFixed(2) }} </span> kg
      </p>
      <p class="font-weight-bold fs-5">
        Emissioni per passeggero:
        <span class="underline"
          >{{ (results.co2e / passengers).toFixed(2) }}
        </span>
        kg
      </p>
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
