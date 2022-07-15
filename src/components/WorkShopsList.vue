<template>
  <div>
    <div v-if="status === 'LOADING'">
      <AppSpinner message="Please wait while we fetch workshop" />
    </div>

    <div v-else-if="status === 'ERROR'">
      <AlertBox heading="Oops ! Some error Happened" theme="danger">
        <p>{{ error.message }}</p>
        <template v-slot:hint>
          <small> Please try again later. Contact system Administrator If you continure seeing this error </small>
        </template>
      </AlertBox>
    </div>

    <div v-else>
      <h1>
        List of workshops
        <div class="float-end">
          <button class="btn btn-sm btn-primary me-2" @click="previous">Previous</button>
          <button class="btn btn-sm btn-primary" @click="next">Next</button>
        </div>
      </h1>
      <hr />
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-3 d-flex my-3" v-for="workshop in workshops" :key="workshop.id">
          <WorkshopCard :workshop="workshop" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkshopCard from "./WorkshopCard";
import { getWorkshopsByPage } from "@/services/workshops";
export default {
  name: "WorkshopsList",
  components: {
    WorkshopCard,
  },
  data() {
    // console.log( 'component instantiated - data is being created' );
    return {
      status: "LOADING",
      workshops: [],
      error: null,
      page: 1,
    };
  },
  methods: {
    //this method will fetch the data
    async fetchWorkshops() {
      try {
        this.workshops = await getWorkshopsByPage(this.page);
        this.status = "LOADED";
      } catch (error) {
        console.log(error.message);
        this.status = "ERROR";
        this.error = error;
      }
    },
    previous() {
      if (this.page !== 1) {
        this.page = this.page - 1;
        this.fetchWorkshops();
      }
    },
    next() {
      this.page = this.page + 1;
      this.fetchWorkshops();
    },
  },
  created() {
    this.fetchWorkshops();
  },
};
</script>

<style></style>
