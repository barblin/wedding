<template>
  <div class="page">
    <br>
    <p class="sleep-text">{{ $t("message.sleepText") }}</p>
    <br>
    <a href="https://goo.gl/maps/LLjYVUFyTsHP1DHp7">Hotels</a>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59999.66220726317!2d29.059636338924086!3d37.78198185246777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHotels!5e0!3m2!1sen!2sat!4v1632345098899!5m2!1sen!2sat"
        width="100%"  height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: "WhereToSleep"
}
</script>

<style scoped>
.sleep-text {
  margin-left: 5px;
  margin-right: 5px;
}
</style>