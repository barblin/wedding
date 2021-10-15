<template>
  <div>
    <br>
    <p>{{ $t("message.scheduleText") }}</p>
    <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FVienna&title=E%26J%20Wedding&src=b2J1NTEybzBkaWM1bm9hbWluNmZqb3ZyZ2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E"
        style="border-width:0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
    <br>
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
</style>