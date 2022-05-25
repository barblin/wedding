<template>
  <div id="app">
    <div id="banner">
      <locale-changer></locale-changer>
      <br>
      <object data="invitation-Ezgi_Johannes_solobronze.svg" width="85%" height="200" style="max-width: 840px"></object>
      <br>
      <HelloWorld msg="Ezgi & Johannes"/>

    </div>
    <br>
    <div class="nav">
      <router-link class="route-link" to="/invitation">{{ $t("message.rsvp") }}</router-link>
      <router-link class="route-link" to="/how-to-get-there">{{ $t("message.arrive") }}</router-link>
      <router-link class="route-link" to="/where-to-sleep">{{ $t("message.sleep") }}</router-link>
      <router-link class="route-link" to="/schedule">{{ $t("message.schedule") }}</router-link>
      <router-link class="route-link" to="/language">{{ $t("message.lang") }}</router-link>
      <router-link class="route-link" to="/about">{{ $t("message.denizli") }}</router-link>
      <router-link class="route-link" to="/gifts">{{ $t("message.gifts") }}</router-link>
      <router-link class="route-link" to="/">{{ $t("message.invitation") }}</router-link>
      <router-view></router-view>
    </div>
    <div class="footer-container">
      <img class="footer" src="invitation-small.svg"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/Welcome.vue'
import LocaleChanger from "@/components/LocaleChanger";

export default {
  name: 'App',
  components: {
    LocaleChanger,
    HelloWorld
  }
}
</script>

<style>

#banner {
  background: url('../public/aydin-hassan-rnOdgU4EEWU-unsplash.jpg');
  width: 100%;
  min-height: 189px;
  z-index: -1;
  border-bottom: solid rgba(175, 162, 104, 0.10) 2px;

}

@import url(http://fonts.googleapis.com/css?family=Source+Code+Pro:400,600);

html {
  /*background-image: url(data:image/png;base64,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);  background-color: #ffffff;
*/
}

.footer-container {
  width: 100%;
  text-align:center;
  display: flex;
  justify-content: center;
}

.footer {
  width: 100px;
  margin-bottom: 50px;
}

body {
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  margin: 0 auto !important;
  text-align: center;
}

.page {
  margin: auto;
  max-width: 1080px;
}

#app {
  font-family: 'Encode Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #06070a;
}

.route-link {
  padding-right: 20px;
  margin: 10px 10px 10px 10px;
  padding-left: 20px;
  text-align: center;
  border: solid 1px;
  color: #026502;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  word-wrap: break-word;
}

.nav {
  width: 100%;
  word-break: break-all;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}

.fact-head {
  margin: 10px;
}

a {
  color: #7e6f20;
}

</style>
