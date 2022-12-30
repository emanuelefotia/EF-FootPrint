<template>
  <v-card>
    <Form />
    <TheButton :fetch="fetchFlightFootprints" />
    <TheResponse :results="results"/>
  </v-card>
</template>

<script>
import Form from "@/components/Form.vue";
import { fetchFlightFootprints } from "../clientAPI/clientApi.js";
import TheButton from "@/components/UI/TheButton.vue";
import { mapFields } from "vuex-map-fields";
import TheResponse from "@/components/UI/TheResponse.vue";

export default {
  components: {
    Form,
    TheButton,
    TheResponse
},
  methods: {
    fetchFlightFootprints,
  },
  computed: {
    ...mapFields(["from", "to", "results","class","passenger"]),
  },
};
</script>
