<template>
  <button
    class="rounded-full inline-flex items-center"
    :class="{
      'bg-accent': blue,
      'bg-Neutral-Green': green,
      'py-3 px-6': minimal,
      'py-4 px-8': !minimal,
      'bg-Neutral-Red': red,
      'bg-Neutral-white': white,
      'text-black': tblack,
      'text-Neutral-white': !tblack,
    }"
  >
    {{ name }}
    <div class="inline-block ml-4" :class="{ hidden: !next }">
      <img src="../assets/next.png" alt="" />
    </div>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: ["name", "blue", "next", "green", "minimal", "red", "white", "tblack"],
};
</script>