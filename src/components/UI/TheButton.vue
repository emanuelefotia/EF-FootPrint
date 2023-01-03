<template>
  <v-row justify="center">
    <v-col cols="6" align="center">
      <v-btn rounded @click="fetch" color="#fabe0e"
        >scoprilo</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    fetch: Function,
  },
};
</script>
