<template>
  <div>
    <div class="Welcome">Welcome</div>

    <div class="flex justify-center mt-20">
      <signup-form />
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
export default {
  components: { SignupForm },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>
