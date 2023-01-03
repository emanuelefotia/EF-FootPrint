<template>
  <TheHeader2></TheHeader2>
  <v-row justify="center">
    <v-col align="center" cols="10" md="6">
      <CardGroup2
        :results="results"
        :passengers="passengers"
        :fetch="fetchFlightFootprints"
      />
    </v-col>
  </v-row>
</template>

<script>
import Form from "@/components/Form.vue";
import { fetchFlightFootprints } from "../clientAPI/clientApi.js";
import { mapFields } from "vuex-map-fields";
import CardGroup2 from "@/components/UI/TestPage/CardGroup2.vue";
import TheHeader2 from "@/components/UI/Headers/TheHeader2.vue";

export default {
  components: {
    Form,
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
