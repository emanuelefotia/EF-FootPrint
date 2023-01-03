<template>
    <div class="text-center">
        <the-header1></the-header1>
        <h4 class="fw-bolder">Benvenuto/a nel nostro blog</h4>
        <div class="background-search">
            <h6 class="fw-bold">
                Qui puoi trovare innumerevoli curiosità relative alle tematiche ambientali.
            </h6>
            <hr>
            <h6 class="fw-bold">Nell'articolo di oggi parleremo di:
            </h6>
            <p class="grey fs-6">
                Emissioni provenienti dal traffico aereo.
            </p>
        </div>

        <h5 class="fw-bolder">Lo Sapevi? </h5>
        <div class="background-search mt-2">
            <h6 class="fw-bold">
                Circa il 2,4% delle emissioni globali di CO2 arriva dal
                traffico <router-link class="action" to="/testpage">aereo</router-link>, secondo i dati
                dell’International
                Council on Clean Transportation (ICCT).</h6>

            <p class="grey fs-6">Tutto quello che facciamo, dal cibo che mangiamo al modo in
                cui viaggiamo, ha come conseguenza il rilascio di emissioni
                nell’atmosfera con un impatto sull’ambiente.
                Ma ci sono alcune attività che impattano più di altre:
                circa il 2,4% delle emissioni globali di CO2 arriva dal
                traffico aereo, secondo i dati dell’International Council
                on Clean Transportation (ICCT). Insieme agli altri gas e
                al vapore acqueo prodotto dai velivoli, l’intero settore
                aereo è responsabile di circa il 5% del riscaldamento
                globale.</p>
            <br>
            <figcaption class="blockquote-footer text-end">
                Fonte: <cite title="Source Title"> Pictet</cite>
            </figcaption>
        </div>

        <h5 class="fw-bolder"> <img src="https://cdn-icons-png.flaticon.com/512/858/858045.png" class="icon">
            Renditi consapevole</h5>
        <div class="background-search2 mb-4">
            <p class="fs-6">Il tuo contributo per noi è fondamentale e ci teniamo a farti un <router-link class="action"
                    to="/testpage">
                    regalo...</router-link>
                <br> Vogliamo metterti a disposizione il nostro tool per il calcolo delle emissioni del tuo prossimo
                viaggio, clicca <router-link class="action" to="/testpage">qui</router-link> qui per accedere alla pagina
                di
                calcolo.
            </p>
        </div>
    </div>
</template>

<script>
import TheHeader1 from '@/components/UI/Headers/TheHeader1.vue';
export default {
    components: { TheHeader1 },
}
</script>