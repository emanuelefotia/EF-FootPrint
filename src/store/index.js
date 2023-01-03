import { createStore } from "vuex";
import airports from "../data/airports.json";
import { getField, updateField } from "vuex-map-fields";

export default createStore({
  state: {
    airports: airports,
    from: {},
    to: {},
    results: {},
    passengers: "",
    classes: ""
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
  actions: {

  },
});
