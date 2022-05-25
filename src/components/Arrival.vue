<template>
  <div>
    <div class="fact-head">
      <p>
        {{ $t("message.arriveInfo") }} {{ $t("message.arriveInstruction") }}
      </p>
      <p style="font-weight: bold; font-size: 1.2em">
        <a
          href="https://www.turkishairlines.com/"
          target="_blank"
          rel="noopener noreferrer"
          >Turkish Airlines</a
        >,
        <a
          href="https://www.flypgs.com/ "
          target="_blank"
          rel="noopener noreferrer"
          >Pegasus Airlines</a
        >,
        <a
          href="https://www.sunexpress.com/tr/ "
          target="_blank"
          rel="noopener noreferrer"
          >Sunexpress Airlines</a
        >
      </p>
      <p class="mb-2">{{ $t("message.arriveOneWay") }}</p>
    </div>
    <div class="cards-page">
      <div class="card">
        <div class="container">
          <h3>
            <b>{{ $t("message.airplaneOnly") }}</b>
          </h3>
          <p>&#8611; {{ $t("message.airplaneOnlyText") }}</p>
          <p>&#8611; {{ $t("message.airplaneOnlyText1") }}</p>
          <p>&#8611; {{ $t("message.airplaneOnlyText2") }}</p>
          <p>&#8611; {{ $t("message.airplaneOnlyText3") }}</p>
          <div class="fact-list mb-2">
            <ul class="facts">
              <li>{{ $t("message.arriveKey1") }}</li>
              <li>
                <a
                  href="https://www.google.com/travel/flights/search?tfs=CBwQAhojagwIAhIIL20vMGZocDkSCjIwMjEtMTItMDZyBwgBEgNETloaI2oHCAESA0ROWhIKMjAyMS0xMi0xMHIMCAISCC9tLzBmaHA5cAGCAQsI____________AUABSAGYAQE"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ $t("message.arriveKey4") }}</a
                >
              </li>
              <li>{{ $t("message.airplaneOnlyBullet1") }}</li>
              <li>
                {{ $t("message.airplaneOnlyBullet2") }}
                <a
                  href="https://havaulasim.denizli.bel.tr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >https://havaulasim.denizli.bel.tr/</a
                >
              </li>
              <li>{{ $t("message.airplaneOnlyBullet3") }}</li>
            </ul>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5997839.809544202!2d18.414979790741636!3d42.7749722496872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x476c55ab471abe9b%3A0x247a52108dd29b4b!2sVienna%20International%20Airport%2C%20Schwechat!3m2!1d48.1126125!2d16.5755139!4m5!1s0x14c72153d6334ac9%3A0xae0ed24f9b70eb3e!2sDenizli%2C%20Turkey!3m2!1d37.6128395!2d29.2320784!5e0!3m2!1sen!2sat!4v1632342494672!5m2!1sen!2sat"
          width="99%"
          height="450"
          style="border:solid grey 2px;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d201741.24452646013!2d29.252673490905302!3d37.808621421807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x14c6ee707e550963%3A0x7ef8a457dcec2fb8!2sDenizli%20Airport%2C%20Cumhuriyet%20Mah.%2C%20K%C3%BCme%20Evler%20Sok.%20No%3A1%2C%2020350%20%C3%87ardak%2FDenizli%2C%20Turkey!3m2!1d37.773965!2d29.690388199999997!4m5!1s0x14c73fb1353a6a69%3A0x2e3363fee62068ae!2zRGVuaXpsaSwgS3Vta8Sxc8SxaywgRGVuaXpsaSwgVHVya2V5!3m2!1d37.783015899999995!2d29.0963328!5e0!3m2!1sen!2sat!4v1647811407459!5m2!1sen!2sat"
          width="99%"
          height="450"
          style="border:solid grey 2px;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <div class="cards-page">
      <div class="card">
        <div class="container">
          <h3>
            <b>{{ $t("message.planeAndTrain") }}</b>
          </h3>
          <p>&#8611; {{ $t("message.planeAndTrainText") }}</p>
          <p>&#8611; {{ $t("message.planeAndTrainText1") }}</p>
          <p>&#8611; {{ $t("message.planeAndTrainText2") }}</p>
          <div class="fact-list">
            <ul class="facts mb-2">
              <li>{{ $t("message.planeAndTrainBullet1") }}</li>
              <li>
                {{ $t("message.planeAndTrainBullet2") }}
                <a
                  href="https://railturkey.org/travel/trains/regional/izmirdenizli/"
                  >Rail Turkey</a
                >
                -
                <a
                  href="https://www.e-yasamrehberi.com/tren-saatleri/bolgesel-trenler/izmir-denizli-tren-saatleri.htm"
                  >{{ $t("message.planeAndTrainBullet3") }}</a
                >
              </li>
              <li>
                <a
                  href="https://ebilet.tcddtasimacilik.gov.tr/view/eybis/tnmGenel/tcddWebContent.jsf"
                  >{{ $t("message.planeAndTrainBullet4") }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d4993767.419757212!2d21.590934218896393!3d43.299772894749566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e4!4m5!1s0x476c55ab471abe9b%3A0x247a52108dd29b4b!2sVienna%20International%20Airport%2C%20Schwechat!3m2!1d48.1126125!2d16.5755139!4m5!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWlyLCBUdXJrZXk!3m2!1d38.423733999999996!2d27.142826!5e0!3m2!1sen!2sat!4v1647812151752!5m2!1sen!2sat"
          width="99%"
          height="450"
          style="border:solid grey 2px;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1kR2eES3VsW-Rb3wvxo817xcaZKrihUxT&ehbc=2E312F"
          width="99%"
          height="450"
          style="border:solid grey 2px; "
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
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
