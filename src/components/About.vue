<template>
  <div>
    <br>
    <div class="fact-head">
      <p>{{ $t("message.denizliText") }}</p>
    </div>
    <br>
    <p>{{ $t("message.denizliSprings") }}</p>
    <img width="100%" src="pam.jpg">
    <br>
    <br>
    <p>{{ $t("message.denizliRoman") }}</p>
    <img width="100%" src="ruins.jpg">
    <br>
    <br>
    <p>{{ $t("message.denizliGöl") }}</p>
    <img width="100%" src="plaj.jpg">
    <img width="100%" src="göl.jpg">
    <br>
  </div>
</template>

<script>
export default {
  name: "GetThere"
}
</script>

<style scoped>
.facts {
  width: 100%;
  float: left;
  align: left;
  text-align: left;
}

.fact-list {
  margin-right: 40px;
}

.fact-head {
  margin: 10px;
}
</style>