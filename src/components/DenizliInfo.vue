<template>
  <div>
    <br>
    <div class="fact-head">
      <p>{{ $t("message.sunscreen") }}</p>
      <p>{{ $t("message.badehose") }}</p>
      <p>{{ $t("message.denizliText") }}</p>
    </div>
    <br>
    <div class="cards-page">
      <br>
      <br>
      <div class="card">
        <img src="pamukkale-white-beauty-1394441-1919x1274.jpg" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>{{ $t("message.denizliSprings") }}</b></h4>
          <p>{{ $t("message.denizliSprings") }}</p>
        </div>
      </div>
      <div class="card">
        <img src="ruins.jpg" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>{{ $t("message.denizliRoman") }}</b></h4>
          <p>{{ $t("message.denizliRoman") }}</p>
        </div>
      </div>
      <div class="card">
        <img src="aydin-hassan-rnOdgU4EEWU-unsplash.jpg" alt="Avatar" style="width:100%">
        <div class="container">
          <h4><b>{{ $t("message.denizliGöl") }}</b></h4>
          <p>{{ $t("message.denizliGöl") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetThere"
}
</script>

<style scoped>
.cards-page {
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 31%;
  margin-right: 20px;
  margin-bottom: 50px;
  float: left;
}


</style>