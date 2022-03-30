<template>
  <div>
    <br>
    <p class="welcome-text">{{ $t("message.welcome") }}</p>
    <br>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100&family=Great+Vibes&family=Grey+Qo&family=Parisienne&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Birthstone&family=Megrim&display=swap');

h1 {
  margin-top: -20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.welcome-text {
  font-family: 'Encode Sans', sans-serif;
  font-size: 1.5rem;
  margin-top: -30px;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 0px;
  color: #7e6f20;
}
</style>
