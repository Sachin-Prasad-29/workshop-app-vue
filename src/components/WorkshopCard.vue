<template>
  <router-link :to="`/workshops/${workshop.id}`" class="text-reset text-decoration-none d-flex w-100">
    <div class="card p-3">
      <img :src="workshop.imageUrl" class="card-img-top" :alt="workshop.name" />
      <div class="card-body">
        <h5 class="card-title">{{ workshop.name }}</h5>
        <div class="card-text">
          <!-- 
                  this is useing the mixing 
                  <div>{{ formatDate(workshop.startDate, format) }} - {{ formatDate(workshop.endDate, format) }}</div> -->
          <!-- this is using the filters -->
          <div>{{ workshop.startDate | formatDate(format) }} - {{ workshop.endDate | formatDate(format) }}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
// import { formatDate } from '@/mixins/formatDate';
//import formatDateMixin from "@/mixins/formatDate";
export default {
  name: "WorkshopCard",
  data() {
    return {
      format: "indian",
    };
  },
  props: {
    workshop: {
      type: Object,
      required: true,
    },
  },
  // methods: {
  //     formatDate: formatDate
  // }
  // mixins: [formatDateMixin],
};
</script>

<style></style>
