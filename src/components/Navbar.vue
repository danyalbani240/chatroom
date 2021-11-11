<template>
  <nav class="flex px-5 py-3 justify-between">
      <div>
          <p>Welcome ... You're here as *</p>
          <p>you're logged in with  ... email</p>
      </div>
        <router-link :to="{ name: 'Welcome' }">
          <TheButton name="logout" :blue="true" />
        </router-link>
      </nav>
</template>

<script>
import TheButton from "../components/TheButton";

export default {
  components: { TheButton },
};
</script>

<style>

</style>