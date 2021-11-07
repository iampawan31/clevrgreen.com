<template>
  <div class="container mx-auto px-40 mb-16">
    <div class="flex justify-between">
      <div class="flex flex-col">
        <NuxtLink
          to="/contact-us"
          class="
            uppercase
            font-semibold
            text-black text-xs
            hover:opacity-50
            mb-2
          "
        >
          Contact Us
        </NuxtLink>
        <NuxtLink
          to="privacy-policy"
          class="
            uppercase
            font-semibold
            text-black text-xs
            hover:opacity-50
            mb-2
          "
        >
          Privacy Policy
        </NuxtLink>
        <NuxtLink
          to="/refund-policy"
          class="
            uppercase
            font-semibold
            text-black text-xs
            hover:opacity-50
            mb-2
          "
        >
          Refund Policy
        </NuxtLink>
        <NuxtLink
          to="/terms-of-service"
          class="uppercase font-semibold text-black text-xs hover:opacity-50"
        >
          Terms of Service
        </NuxtLink>
      </div>
      <div>
        <div class="text-xl uppercase font-semibold mb-4">
          Help us, help you grow
        </div>
        <div class="max-w-md text-sm">
          Sign up to stay updated by our Mastergrowers with exclusive content,
          and offers.
        </div>
        <div class="flex justify-between border-b-2 pb-2 border-alternate my-2">
          <input
            type="text"
            placeholder="My email address"
            class="placeholder-lessBlack text-xs"
          />
          <button class="text-lessBlack uppercase text-xs font-semibold">
            Subscribe <span class="ml-2">▶︎</span>
          </button>
        </div>
      </div>
    </div>
    <div class="text-center mt-10">
      Copyright © {{ currentYear }}, ClevrGreen.
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style></style>
