<template>
  <div class="page">
    <div></div>

    <div class="cards-page">
      <div class="card card--mr">
        <img src="sunset-at-pamukkale-1314428.jpg" style="width:100%" />
        <div class="container">
          <h4>
            <b>{{ $t("message.adaTitle") }}</b>
          </h4>
          <p>{{ $t("message.adaText") }}</p>
          <p><a href="https://goo.gl/maps/DUN2nUpcnpVyErG8A">Location</a></p>
        </div>
      </div>
      <div class="card">
        <img
          src="oleksandr-kurchev-BGGgkws03KM-unsplash.jpg"
          style="width:100%"
        />
        <div class="container">
          <h4>
            <b>{{ $t("message.bcnTitle") }}</b>
          </h4>
          <p>{{ $t("message.bcnText") }}</p>
          <p><a href="https://goo.gl/maps/zyheQRyU5QPg8WaL9">Location</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetThere",
};
</script>

<style scoped>
.facts {
  width: 100%;
  align: left;
  text-align: left;
}
</style>
