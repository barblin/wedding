<template>
  <div>
    <h3>{{ $t("message.tips") }}</h3>
    <div class="fact-head mb-1">
      <p>&#8611; {{ $t("message.sunscreen") }}</p>
      <p>&#8611; {{ $t("message.badehose") }}</p>
      <p>&#8611; {{ $t("message.shorts") }}</p>
      <p>&#8611; {{ $t("message.shorts") }}</p>
      <p>&#8611; {{ $t("message.exchange") }} <a href="https://www.google.com/maps/search/D%C3%B6viz+Ofis+Denizli/@37.7857086,29.0778137,14.75z">
        Location
      </a></p>
      <p>&#8611; {{ $t("message.denizliText") }}</p>
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
          <p><a href="https://goo.gl/maps/y1EyEJqDZkXmuKW9A">{{ $t("message.denizliSpringsLink") }}</a></p>
        </div>
      </div>
      <div class="card card--mr">
        <img src="ruins.jpg" alt="Avatar" style="width:100%"/>
        <div class="container">
          <h4>
            <b>{{ $t("message.denizliRoman") }}</b>
          </h4>
          <p><a href="https://goo.gl/maps/Y81m433gg46aSX5n7">{{ $t("message.denizliRomanLink") }}</a></p>
        </div>
      </div>
      <div class="card card--mr">
        <img
            src="aydin-hassan-rnOdgU4EEWU-unsplash.jpg"
            alt="Avatar"
            style="width:100%"
        />
        <div class="container">
          <h4>
            <b>{{ $t("message.denizliGöl") }}</b>
          </h4>
          <p><a href="https://goo.gl/maps/5WGLgTtyfxofUysP7">{{ $t("message.denizliRomanLink") }}</a></p>
        </div>
      </div>
    </div>
    <div class="cards-page">
      <div class="card card--mr">
        <img
            src="laodiceia.jpg"
            alt="Avatar"
            style="width:100%"
        />
        <div class="container">
          <h4>
            <b>{{ $t("message.laodicia") }}</b>
          </h4>
          <p><a href="https://goo.gl/maps/qaQgtHM92QZks2m36">{{ $t("message.laodiciaLink") }}</a></p>
        </div>
      </div>
      <div class="card card--mr">
        <img
            src="ruins.jpg"
            alt="Avatar"
            style="width:100%"
        />
        <div class="container">
          <h4>
            <b>{{ $t("message.tripolis") }}</b>
          </h4>
          <p><a href="https://goo.gl/maps/fEtX9rxY62g7Fvbn6">{{ $t("message.tripolisLink") }}</a></p>
        </div>
      </div>
      <div class="card card--mr">
        <img
            src="cablecar.jpg"
            alt="Avatar"
            style="width:100%"
        />
        <div class="container">
          <h4>
            <b>{{ $t("message.teleferik") }}</b>
          </h4>
          <p><a href="https://goo.gl/maps/fEtX9rxY62g7Fvbn6">{{ $t("message.teleferikLink") }}</a></p>
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

@media (max-width: 850px) {
  .cards-page {
    width: 99%;
    display: inline;
  }

  .card {
    width: 100%;
  }

}

.card--mr {
  margin-right: 20px;
}
</style>
