<template>
  <div
    class="overflow-y-scroll bg-Neutral-Grey6 flex-1"
    ref="messages"
    v-if="documents"
  >
    <div
      class="mx-5 flex justify-start mt-10"
      v-for="doc in messagesWithNewTime"
      :key="doc.id"
    >
      <div
        class="
          px-2
          py-5
          rounded-xl
          shadow-lg
          items-start
          flex flex-col
          bg-white
        "
        :class="{ 'bg-secondary': user.displayName == doc.name }"
      >
        <span class="text-Neutral-Green">{{ doc.name }} :</span>
        <span
          :class="{
            'text-white': user.displayName == doc.name,
            'text-primary': user.displayName != doc.name,
          }"
          class="text-lg"
          >{{ doc.message }}</span
        >
        <span
          :class="{
            'text-Neutral-Grey6': user.displayName == doc.name,
            'text-primary': user.displayName != doc.name,
          }"
          class="text-xs font-extalight"
          >{{ doc.created }} ago</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composable/getCollection";
import { user } from "../composable/getUser";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "vue";
export default {
  setup() {
    const { documents } = getCollection("messages");
    const messagesWithNewTime = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.created.toDate());
          return { ...doc, created: time };
        });
      }
    });

    //auto scroll down to last message
    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });
    return { documents, user, messagesWithNewTime, messages };
  },
};
</script>

<style></style>
