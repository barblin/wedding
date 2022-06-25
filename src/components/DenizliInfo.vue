<template>
  <div>
    <h3>{{ $t("message.tips") }}</h3>
    <div class="fact-head mb-1">
      <p>{{ $t("message.sunscreen") }}</p>
      <p>{{ $t("message.badehose") }}</p>
      <p>{{ $t("message.denizliText") }}</p>
      <p>{{ $t("message.shorts") }}</p>
    </div>
    <br>
    <br>
    <h3>{{ $t("message.attractions") }}</h3>

    <div class="cards-page">
      <div class="card card--mr">
        <img
          src="pamukkale-white-beauty-1394441-1919x1274.jpg"
          alt="Avatar"
          style="width:100%"
        />
        <div class="container">
          <h4>
            <b>{{ $t("message.denizliSprings") }}</b>
          </h4>
          <p>{{ $t("message.denizliSprings") }}</p>
        </div>
      </div>
      <div class="card card--mr">
        <img src="ruins.jpg" alt="Avatar" style="width:100%" />
        <div class="container">
          <h4>
            <b>{{ $t("message.denizliRoman") }}</b>
          </h4>
          <p>{{ $t("message.denizliRoman") }}</p>
        </div>
      </div>
      <div class="card">
        <img
          src="aydin-hassan-rnOdgU4EEWU-unsplash.jpg"
          alt="Avatar"
          style="width:100%"
        />
        <div class="container">
          <h4>
            <b>{{ $t("message.denizliGöl") }}</b>
          </h4>
          <p>{{ $t("message.denizliGöl") }}</p>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: "GetThere",
};
</script>

<style>
.cards-page {
  margin-top: 44px;
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 49%;
  margin-bottom: 50px;
}

.card--mr {
  margin-right: 20px;
}
</style>
