<template>
  <div class="page">
    <br>
    <div></div>
    <br>
    <div class="cards-page">
      <br>
      <br>
      <div class="card">
        <img src="sunset-at-pamukkale-1314428.jpg" style="width:100%"/>
        <div class="container">
          <h4><b>{{ $t("message.adaTitle") }}</b></h4>
          <p>{{ $t("message.adaText") }}</p>
          <p><a href="https://goo.gl/maps/DUN2nUpcnpVyErG8A">Location</a></p>
        </div>
      </div>
      <div class="card">
        <img src="oleksandr-kurchev-BGGgkws03KM-unsplash.jpg" style="width:100%"/>
        <div class="container">
          <h4><b>{{ $t("message.bcnTitle") }}</b></h4>
          <p>{{ $t("message.bcnText") }}</p>
          <p><a href="https://goo.gl/maps/zyheQRyU5QPg8WaL9">Location</a></p>
        </div>
      </div>
    </div>
    <br>
    <br>
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
  width: 49%;
  margin-right: 20px;
  margin-bottom: 50px;
  float: left;
}

.facts {
  width: 100%;
  float: left;
  align: left;
  text-align: left;
}
</style>