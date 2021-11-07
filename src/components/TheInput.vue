<template>
  <div class="flex flex-col">
    <label class="text-left" :for="id" v-if="label">{{ label }}</label>

    <input
      :required="required"
      autocomplete="off"
      :id="id"
      :type="inputType"
      :class="{
        'placeholder-white': placeholderWhite,
        'placeholder-Grey5': !placeholderWhite,
      }"
      :placeholder="placeholder"
      class="
        placeholder-Grey5
        md:w-80
        w-64
        outline-none
        py-3
        border-b-2 border-Neutral-Grey5
        bg-transparent
        my-3
      "
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: [
    "placeholder",
    "modelValue",
    "placeholderWhite",
    "label",
    "id",
    "required",
    "inputType",
  ],
  emits: ["update:modelValue"],
};
</script>
