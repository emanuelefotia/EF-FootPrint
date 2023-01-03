<template>
  <TheHeader2></TheHeader2>
  <v-row justify="center">
    <v-col align="center" cols="10" md="6">
      <CardGroup2 :fetch="fetchFlightFootprints" />
      <TheResponse  
        v-if="results.co2e"
        :results="results"
        :passengers="passengers"
      />
    </v-col>
  </v-row>
</template>

<script>
import Form from "@/components/Form.vue";
import { fetchFlightFootprints } from "../clientAPI/clientApi.js";
import { mapFields } from "vuex-map-fields";
import TheResponse from "@/components/UI/TheResponse.vue";
import CardGroup2 from "@/components/UI/TestPage/CardGroup2.vue";
import TheHeader2 from "@/components/UI/Headers/TheHeader2.vue";

export default {
  components: {
    Form,
    TheResponse,
    TheHeader2,
    CardGroup2,
  },
  methods: {
    fetchFlightFootprints,
  },
  computed: {
    ...mapFields(["from", "to", "results", "classes", "passengers"]),
  },
};
</script>
