<template>
  <div class="py-16">
    <div class="container mx-auto px-4 sm:px-10 lg:px-8 xl:px-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div class="text-4xl mb-4">Contact information</div>
          <div class="mb-2 font-semibold">
            Request more information or ask us a question.
          </div>
          <div class="mb-4 text-lessGray">
            support@clevrgreen.com (Responses within 1-2 business days)
          </div>
          <div class="mb-2 font-semibold">Give us a ring.</div>
          <div class="mb-4 text-lessGray">
            (858) 367-0854 (7 Days a week, 9AM - 6PM PST)
          </div>
          <div class="mb-2 font-semibold">
            Current customer in need of immediate support?
          </div>
          <div class="mb-4 text-lessGray">
            Utilize website live chat or text us with "URGENT" at the beginning
            of the message
          </div>
          <hr class="border-b border-alternate my-16 opacity-40" />
          <div class="text-4xl mb-4">Pricing</div>
          <Accordian :items="pricingFaqsData" />
          <hr class="border-b border-alternate my-16 opacity-40" />
          <div class="text-4xl mb-4">
            What's in the kit and how does it work?
          </div>
          <Accordian :items="howItWorksData" />
          <hr class="border-b border-alternate my-16 opacity-40" />
          <div class="text-4xl mb-4">FAQ</div>
          <Accordian :items="faqsData" />
        </div>
        <div><h1>Hello World</h1></div>
      </div>
    </div>
  </div>
</template>

<script>
import { pricingFaqs, howItWorks, faqs } from '../data'
export default {
  computed: {
    pricingFaqsData() {
      return pricingFaqs
    },
    howItWorksData() {
      return howItWorks
    },
    faqsData() {
      return faqs
    },
  },
}
</script>

<style></style>
