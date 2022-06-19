<template>
  <div class="page">
    <br>
    <iframe
        :src="$config.FORM_EN"
        width="100%" height="1300" frameborder="0" marginheight="0" marginwidth="0">Loading…
    </iframe>
  </div>
</template>

<script>
export default {
  name: "rsvp",
  mounted() {
    console.log(this.$config.FORM_EN)
  }
}
</script>

<style scoped>

</style>