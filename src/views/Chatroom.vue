<template>
  <div class="bg-primary h-screen p-10 w-screen">
    <div
      class="bg-white flex flex-col justify-between h-full rounded-xl w-full"
    >
      <Navbar />
      <messages /> <ChatField />
    </div>
  </div>
</template>

<script>
import ChatField from "../components/ChatField";
import Messages from "../components/Messages.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar, ChatField, Messages },
};
</script>

<style></style>
