<template>
  <v-row justify="center">
    <v-col cols="11" md="6" align="center">
      <CardGroup />
    </v-col>
  </v-row>
</template>

<script>
import CardGroup from "@/components/UI/HomePage/CardGroup.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    CardGroup,
  },
});
</script>
