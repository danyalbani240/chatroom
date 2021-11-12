<template>
  <div class="overflow-y-scroll bg-Neutral-Grey6 flex-1" v-if="documents">
    <div
      class="mx-5 flex justify-start mt-10"
      v-for="doc in documents"
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
          >{{ doc.message }}</span
        >
        <span
          :class="{
            'text-Neutral-Grey6': user.displayName == doc.name,
            'text-primary': user.displayName != doc.name,
          }"
          >{{ doc.created.toDate() }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composable/getCollection";
import { user } from "../composable/getUser";
export default {
  setup() {
    const { documents } = getCollection("messages");
    console.log(user.displayName);
    return { documents, user };
  },
};
</script>

<style></style>
