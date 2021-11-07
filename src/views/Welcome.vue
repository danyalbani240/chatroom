<template>
  <div class="bg-primary p-10 min-h-screen">
    <div class="welcome rounded-xl bg-white ">
      <h1>Welcome</h1>
      <div class="flex justify-center mt-20">
        <signup-form />
      </div>
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
