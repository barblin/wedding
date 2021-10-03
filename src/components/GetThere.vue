<template>
  <div>
    <br>
    <div class="fact-head">
      <p>{{ $t("message.arriveInstruction") }}</p>
    </div>
    <div class="fact-list">
      <ul class="facts">
        <li>{{ $t("message.arriveKey1") }}</li>
        <li>{{ $t("message.arriveKey2") }}</li>
        <li>{{ $t("message.arriveKey3") }}</li>
        <li><a href="https://www.google.com/travel/flights/search?tfs=CBwQAhojagwIAhIIL20vMGZocDkSCjIwMjEtMTItMDZyBwgBEgNETloaI2oHCAESA0ROWhIKMjAyMS0xMi0xMHIMCAISCC9tLzBmaHA5cAGCAQsI____________AUABSAGYAQE">{{ $t("message.arriveKey4") }}</a></li>
        <li>{{ $t("message.arriveKey5") }}</li>
        <li>{{ $t("message.arriveKey6") }}</li>
        <li>{{ $t("message.arriveKey7") }}</li>
        <li><a href="https://www.rome2rio.com/map/Denizli-Airport-DNZ/Denizli#r/Taxi/s/0">{{ $t("message.arriveKey8") }}</a></li>
      </ul>
      <br>
    </div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5997839.809544202!2d18.414979790741636!3d42.7749722496872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x476c55ab471abe9b%3A0x247a52108dd29b4b!2sVienna%20International%20Airport%2C%20Schwechat!3m2!1d48.1126125!2d16.5755139!4m5!1s0x14c72153d6334ac9%3A0xae0ed24f9b70eb3e!2sDenizli%2C%20Turkey!3m2!1d37.6128395!2d29.2320784!5e0!3m2!1sen!2sat!4v1632342494672!5m2!1sen!2sat"
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <br>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d201741.98562712478!2d29.249028769056228!3d37.80835015964934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x14c6ee707e550963%3A0x7ef8a457dcec2fb8!2sCumhuriyet%20Mah.%2C%20Denizli%20%C3%87ardak%20Havaliman%C4%B1%2C%20K%C3%BCme%20Evler%20Sok.%2C%20%C3%87ardak%2FDenizli%2C%20Turkey!3m2!1d37.773965!2d29.690388199999997!4m5!1s0x14c73f31661caa7b%3A0x967564758913b0ee!2s15%20May%C4%B1s%2C%20hotel%2C%20796.%20Sokak%2C%20Denizli%20Merkez%2FDenizli%2C%20Turkey!3m2!1d37.7774918!2d29.0881972!5e0!3m2!1sen!2sat!4v1632342576463!5m2!1sen!2sat"
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
  margin-right: 50px;
}

.fact-head {
  margin: 10px;
}
</style>