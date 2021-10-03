<template>
  <div class="locale-changer">
    <select class="select" v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['Deutsch', 'English'] }
  }
}
</script>

<style>
.locale-changer {
  position: absolute;
  margin-top: -20px;
  margin-left: 0px;
}

.select {
  color: #42b983;
  border: #42b983;
  background-color: white;
  color: #006400;
  text-decoration: none;
  font-family: 'Megrim';
}
</style>