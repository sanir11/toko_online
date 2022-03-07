<template>
  <div class="container">
    <div class="col-md-12">
      <h1>Contact</h1>
      <address class="text-center">Lengkong City</address>
      <peta />
    </div>
    <FormContact />
  </div>
</template>

<script>
import peta from "../components/peta.vue";
import FormContact from "../components/FromContact.vue";
export default {
  components: {
    peta,
    FormContact,
  },
};
</script>
