<template>
  <div class="bg-primary h-screen p-10 w-screen">
    <div class="bg-white h-full rounded-xl w-full">
      <Navbar />
      <ChatField />
    </div>
  </div>
</template>

<script>
import ChatField from "../components/ChatField";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar, ChatField },
};
</script>

<style></style>
