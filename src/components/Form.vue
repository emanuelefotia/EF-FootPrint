<template>
  <v-row justify="center">
    <v-col align="center" cols="12" md="6">
      <label class="fs-6">Partenza</label>
      <autocomplete
        v-model="from"
        :items="airports"
        :returned="['iata_code']"
        displayed="name"
      >
      </autocomplete>
    </v-col>
    <v-col align="center" cols="12" md="6">
      <label class="fs-6">Arrivo</label>
      <autocomplete
        v-model="to"
        :items="airports"
        :returned="['iata_code']"
        displayed="name"
      ></autocomplete>
    </v-col>

    <v-col align="center" cols="12" md="6">
      <v-text-field label="Passeggeri" type="number" v-model="passengers">
      </v-text-field>
    </v-col>
    <v-col align="center" cols="12" md="6">
      <v-select label="Classe" v-model="classes" :items="items"></v-select>
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
      items: ["economy", "business", "first"],
    };
  },
  computed: {
    ...mapState(["airports"]),
    ...mapFields(["from", "to", "results", "passengers", "classes"]),
  },
};
</script>

<style>
input {
  width: 100%;
  height: 55px;
  border: 1px solid #ccc;
  color: #666;
  border-radius: 10px;
  outline: none;
  padding: 9px 14px;
  box-sizing: border-box;
  font-size: 14px;
}
.vue-autocomplete-input-tag-items {
  border: 1px solid #ccc;
  max-height: 200px;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  overflow: auto;
}
.vue-autocomplete-input-tag-item {
  padding: 6px 16px;
  color: #4a4a4a;
  max-width: 100%;
  cursor: pointer;
  text-align: left;
  font-size: 14px;
}
.vue-autocomplete-input-tag-item:hover {
  background-color: #e8e8e8;
}
</style>
