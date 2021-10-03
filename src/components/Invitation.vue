<template>
  <div>
    <br>
    <pdf class="invitation" width="100%" src="./ezgi-johannes25.pdf"></pdf>
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
  border: solid black 2px;
  text-decoration: none;
}

</style>