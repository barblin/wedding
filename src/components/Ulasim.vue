<template>
  <div>
    <div class="fact-head">
      <p>
        {{ $t("message.arriveInfo") }}
      </p>
    </div>
    <div class="cards-page">
      <div class="card">
        <div class="container">
          <h3>
            <b>{{ $t("message.planeAndBus") }}</b>
          </h3>
          <p>&#8611; {{ $t("message.planeAndBusText") }}</p>
          <p>&#8611; {{ $t("message.planeAndBusText1") }}</p>
          <p>&#8611; {{ $t("message.planeAndBusText2") }}</p>
          <div class="fact-list mb-2">
            <ul class="facts">
              <li>{{ $t("message.planeAndBusBullet1") }}</li>
              <li>{{ $t("message.planeAndBusBullet2") }}</li>
              <li>{{ $t("message.planeAndBusBullet3") }}</li>
            </ul>
          </div>
          <p>&#8611; {{ $t("message.planeAndBusText3") }}</p>
          <div class="fact-list mb-2">
            <ul class="facts">
              <li>{{ $t("message.planeAndBusText6") }}</li>
            </ul>
          </div>
          <p>
            <a href="https://www.pamukkale.com.tr/">{{
              $t("message.planeAndBusText4")
            }}</a>
            -
            <a href="https://www.flixbus.com.tr/">{{
              $t("message.planeAndBusText5")
            }}</a>
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6032376.084583575!2d19.157775379589726!3d42.41717331908884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x476c55ab471abe9b%3A0x247a52108dd29b4b!2sVienna%20International%20Airport%2C%201300%20Schwechat!3m2!1d48.1126125!2d16.5755139!4m5!1s0x14c39aaeddadadc1%3A0x95c69f73f9e32e33!2sAntalya%2C%20Turkey!3m2!1d36.8968908!2d30.7133233!5e0!3m2!1sen!2sat!4v1647818799370!5m2!1sen!2sat"
          width="99%"
          height="450"
          style="border:solid grey 2px;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d51043.25160245236!2d30.699672539328233!3d36.90940511100648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x14c384778d617c9d%3A0xc17cdcfcdb48e8fa!2zWWXFn2lsa8O2eSwgQW50YWx5YSBIYXZhbGltYW7EsSAoQVlUKSwgQW50YWx5YSBIYXZhYWxhbsSxIETEscWfIEhhdGxhciBUZXJtaW5hbGkgMSwgTXVyYXRwYcWfYS9BbnRhbHlhLCBUdXJrZXk!3m2!1d36.9043327!2d30.8018768!4m5!1s0x14c38e354576725f%3A0xcecde25fcafe69bc!2sAntalya%20Otogar%2C%20Yeni%20Do%C4%9Fan%2C%20Dumlup%C4%B1nar%20Bulvar%C4%B1%2C%20Kepez%2FAntalya%2C%20Turkey!3m2!1d36.9219443!2d30.6649809!5e0!3m2!1sen!2sat!4v1647818881412!5m2!1sen!2sat"
          width="99%"
          height="450"
          style="border:solid grey 2px;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d405791.4594105394!2d29.598518696454537!3d37.38401951583145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x14c38e354576725f%3A0xcecde25fcafe69bc!2sAntalya%20Otogar%2C%20Yeni%20Do%C4%9Fan%2C%20Dumlup%C4%B1nar%20Bulvar%C4%B1%2C%20Kepez%2FAntalya%2C%20Turkey!3m2!1d36.9219443!2d30.6649809!4m5!1s0x14c73f7cc5f99983%3A0x1da19b281cdb5cd3!2sDenizli%20Otogar%C4%B1%2C%20Toprakl%C4%B1k%2C%2020150%20Pamukkale%2FDenizli%2C%20Turkey!3m2!1d37.7853557!2d29.0914197!5e0!3m2!1sen!2sat!4v1647818976155!5m2!1sen!2sat"
          width="99%"
          height="450"
          style="border:solid grey 2px;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
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
.cards-page {
  max-width: 1080px;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 50px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  /* margin-right: 20px; */
  
}

.facts {
  width: 100%;
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
