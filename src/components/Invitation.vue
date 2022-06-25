<template>
  <div class="page">
    <br>
    <pdf v-if="!($i18n.locale === 'Türkçe')" class="invitation" width="100%" src="./ezgi-johannes25.pdf"></pdf>
    <pdf v-if="($i18n.locale === 'Türkçe')" class="invitation" width="100%" src="./ezgi-johannes_tr.pdf"></pdf>
    <br>
    <br>
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  name: "Invitation",
  components: {
    pdf
  }
}
</script>

<style scoped>

.invitation {
  margin-bottom: 30px;
  border: solid #AFA268 2px;
  text-decoration: none;
}

</style>