<template>
  <div class="page">
    <br>
    <iframe v-if="($i18n.locale === 'Türkçe')"
        :src="$config.FORM_TR"
        width="100%" height="1300" frameborder="0" marginheight="0" marginwidth="0">Loading…
    </iframe>
    <iframe v-else
        :src="$config.FORM_EN"
        width="100%" height="1300" frameborder="0" marginheight="0" marginwidth="0">Loading…
    </iframe>
  </div>
</template>

<script>
export default {
  name: "rsvp",
  mounted() {
  }
}
</script>

<style scoped>

</style>