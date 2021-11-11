<template>
  <div class="flex flex-col my-3">
    <label class="text-left" :for="id" v-if="label">{{ label }} :</label>

    <input
      @focus="toggleBorder"
      @blur="toggleBorder"
      :required="required"
      autocomplete="off"
      :id="id"
      :type="inputType"
      :placeholder="placeholder"
      :class="{
        'border-Neutral-Grey3': bluredBorder,
        'border-Neutral-Grey5': !bluredBorder,
      }"
      class="
        placeholder-Grey5
        md:w-80
        w-64
        outline-none
        py-3
        border-b-2
        bg-transparent
      "
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    modelValue: {
      type: String,
      required: false,
    },
  },
  emits: ["update:modelValue"],
  setup() {
    const bluredBorder = ref(false);
    const toggleBorder = () => {
      bluredBorder.value = !bluredBorder.value;
    };
    return { toggleBorder, bluredBorder };
  },
};
</script>
