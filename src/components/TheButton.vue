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
  props: {
    name: {
      type: String,
      required: false,
    },
    blue: {
      type: Boolean,
      required: false,
    },
    next: {
      type: Boolean,
      required: false,
      default: false,
    },
    green: {
      type: Boolean,
      required: false,
    },
    minimal: {
      type: Boolean,
      required: false,
    },
    red: {
      type: Boolean,
      required: false,
    },
    white: {
      type: Boolean,
      required: false,
    },
    tblack: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
