<template>
  <v-row justify="center">
    <v-col cols="12" align="center">
      <div class="text-center">
        <h4 class="fw-bold mt-2">I dati dell'inquinamento del traffico aereo</h4>
        <div class="row">
          <div class="background-search mt-2 mb-3 px-4">
            <p class="fs-6">
              A prima vista, potrebbe sembrare un contributo minimo, se si pensa
              all’impatto delle auto o dell’industria. Ma va considerato che
              solo una piccolissima parte della popolazione mondiale vola
              frequentemente: secondo l’ICCT, solo il 3% prende voli
              regolarmente. E anche nei Paesi più ricchi del mondo, solo il
              12-15% della popolazione prende spesso un aereo. Eppure, spiegano
              dall’ICCT, se tutta la popolazione mondiale prendesse un solo volo
              a lungo raggio all’anno, le sole emissioni del traffico aereo
              supererebbero quelle totali degli Stati Uniti.
            </p>
            <br />
            <figcaption class="blockquote-footer text-end">
              Fonte: <cite title="Source Title"> Pictet</cite>
            </figcaption>
          </div>
        </div>
      </div>

      <!--Istruzioni-->
      <div>
        <div class="background-search2 mt-4">
          <p class="label grey fs-6">
            <span>*</span>Istruzioni per l'utilizzo del tool : per ottenere i
            risultati del calcolo, ti basterà compilare opportunamente i vari
            campi del form relativi ad aereoporto di partenza e di arrivo,
            numero di passeggeri a bordo, classe di volo e cliccare sul pulsante
            "<span>scoprilo!</span>"
          </p>
        </div>
      </div>
      <h5 class="fw-bold my-6">Il nostro calcolatore</h5>
      <div class="background-search">
        <v-col align="center" class="10">
          <Form />
          <TheButton :fetch="fetch" />
        </v-col>
        <TheResponse  
        v-if="results.co2e"
        :results="results"
        :passengers="passengers"
      />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Form from "@/components/Form.vue";
import TheButton from "@/components/UI/TheButton.vue";
import TheResponse from "@/components/UI/TheResponse.vue";

export default {
  props: ["fetch","results","passengers"],
  components: {
    Form,
    TheButton,    
    TheResponse,
  },
};
</script>
