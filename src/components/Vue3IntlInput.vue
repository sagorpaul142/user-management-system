<template>
  <div class="custom-tel-input">
    <CustomInput
      ref="input"
      type="tel"
      :id="id"
      :modelValue="modelValue"
      @update:modelValue="onInput"
    >
      <slot>Contact Number</slot>
    </CustomInput>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import CustomInput from "./CustomInput.vue";

export default defineComponent({
  name: "vue3-tel-input",
  setup(props, { emit }) {
    const input = ref();

    const telInput = ref();

    const isValidNumber = ref(false);

    onMounted(() => {
      const inputElement = input.value.inputElement;
      telInput.value = intlTelInput(inputElement, {
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js",
        onlyCountries: ["bd"],
        // separateDialCode: true,
        // placeholderNumberType: "FIXED_LINE",
        // hiddenInput: "full",
        // your options
      });
    });

    const hasError = computed(() => {
      return props.isDirty && !isValidNumber.value;
    });

    function onInput() {
      const formattedNumber = telInput.value.getNumber();
      isValidNumber.value = telInput.value.isValidNumber();

      emit("update:modelValue", formattedNumber);
    }

    return {
      input,
      onInput,
      telInput,
      isValidNumber,
      hasError,
    };
  },
  props: {
    id: {
      type: String,
    },
    modelValue: {
      type: [String, Number],
    },
    isDirty: {
      default: false,
      type: Boolean,
    },
  },
  emits: ["update:modelValue"],
  components: {
    CustomInput,
  },
});
</script>

<style>
.iti__flag {
  background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/img/flags.png");
}
.iti {
  width: 100%;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .iti__flag {
    background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/img/flags@2x.png");
  }
}
</style>
