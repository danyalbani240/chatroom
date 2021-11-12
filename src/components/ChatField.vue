<template>
  <form
    @submit.prevent="handleMessage"
    class="m-2.5 flex justify-center max-h-12 overflow-hidden"
  >
    <textarea
      class="
        w-full
        max-w-full
        mb-1.5
        box-border
        border-0
        rounded-3xl
        outline-none
        p-2.5
      "
      v-model="message"
      @keydown.enter.prevent="handleMessage"
      placeholder="message..."
    ></textarea>
    <the-button
      @click="handleMessage"
      :justButton="true"
      :next="true"
      :minimal="true"
      :blue="true"
    />
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import TheButton from "./TheButton.vue";
import { user } from "../composable/getUser";
import { timestamp } from "../firebase/config";
import useCollection from "../composable/useCollection";
export default {
  components: { TheButton },
  setup() {
    const message = ref("");
    const { addDoc } = useCollection("messages");
    const handleMessage = async () => {
      const chat = {
        message: message.value,
        name: user.value.displayName,
        created: timestamp(),
      };
      await addDoc(chat);
      message.value = "";
    };
    return {
      message,
      handleMessage,
    };
  },
};
</script>

<style></style>
