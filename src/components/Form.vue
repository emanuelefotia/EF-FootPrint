<template>
  <v-row justify="center">
    <v-col cols="6" align="center">
      <br />
      <v-card outlined>
        <autocomplete
          v-model="from"
          :items="airports"
          :returned="['iata_code']"
          displayed="name"
        ></autocomplete>
      </v-card>
      <br />
      <v-card outlined>
        <autocomplete
          v-model="to"
          :items="airports"
          :returned="['iata_code']"
          displayed="name"
        ></autocomplete>
      </v-card>
      <br />
      <v-text-field
      v-model="passengers">

      </v-text-field>
      <v-select
      v-model="class"
      :items="items">

      </v-select>
    </v-col>
  </v-row>
</template>

<script>
import autocomplete from "vue-autocomplete-input-tag";
import { mapFields } from "vuex-map-fields";
import { mapState } from "vuex";
export default {
  components: {
    autocomplete,
  },
  data() {
    return {
      items: ['economy', 'business', 'first'],
    };
  },
  computed: {
    ...mapState(["airports"]),
    ...mapFields(["from", "to", "results","passengers","class"]),
  },
};
</script>
s
