<template>
  <div class="page">
    <div></div>

    <div class="cards-page">
      <div class="card card--mr">
        <img src="sunset-at-pamukkale-1314428.jpg" style="width:100%"/>
        <div class="container">
          <h4>
            <b>{{ $t("message.adaTitle") }}</b>
          </h4>
          <p style="margin-top: -20px; margin-bottom: 20px">{{ $t("message.adaCode") }}</p>
          <p style="margin-bottom: 30px"><a href="https://goo.gl/maps/DUN2nUpcnpVyErG8A">Location</a></p>
          <div style="text-align: left; margin: 0 auto">
            <ul style="margin-left: 20px; margin-right: 20px;">
              <li>{{ $t("message.adaFeast") }}</li>
              <li>{{ $t("message.adaBride") }}</li>
              <li>{{ $t("message.adaKorso") }}</li>
              <li>{{ $t("message.adaHenna") }}
                <ul>
                  <li>{{ $t("message.adaCeremony") }}</li>
                  <li>{{ $t("message.adaCake") }}</li>
                  <li>{{ $t("message.adaDance") }}</li>
                </ul>
              </li>
              <li>{{ $t("message.adaFotos") }}</li>
            </ul>
          </div>
          <br>
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
          <p style="margin-top: -20px; margin-bottom: 20px">{{ $t("message.bcnCode") }}</p>
          <p style="margin-bottom: 30px"><a href="https://goo.gl/maps/zyheQRyU5QPg8WaL9">Location</a></p>
          <div style="text-align: left; margin-bottom: 40px">
            <ul style="margin-left: 20px; margin-right: 20px;">
              <li>{{ $t("message.bcnStart") }}</li>
              <li>{{ $t("message.bcnCeremony") }}</li>
              <li>{{ $t("message.bcnCocktail") }}</li>
              <li>{{ $t("message.bcnSeats") }}
              <li>{{ $t("message.bcnFirstDance") }}</li>
              <li>{{ $t("message.bcnEat") }}</li>
              <li>{{ $t("message.bcnDance") }}</li>
              <li>{{ $t("message.bcnAfterTransition") }}</li>
              <li>{{ $t("message.bcnAfterParty") }}</li>
            </ul>
          </div>
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
