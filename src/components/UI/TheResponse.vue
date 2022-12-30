<template>
    <p>{{ results.co2e }}</p>
    <!-- <p>{{ (results.co2e / passengers).toFixed(2) }}</p> -->
</template>

<script>
export default {
    props: {
        results:{}
    }
}
</script>