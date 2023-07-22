<template>
  <div>
    <div v-if="status === 'LOADING'">
      <AppSpinner message="Please wait while we fetch workshop details" />
    </div>
    <div v-else-if="status === 'ERROR'">
      <AppAlert heading="Oops! Some error occured" theme="danger">
        <p>{{ error.message }}</p>

        <template v-slot:hint>
          <small>Please try again later. Contact system administrator if you continue seeing this error.</small>
        </template>
      </AppAlert>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-12">
          <h1>{{ workshop.name }}</h1>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-4">
          <img class="img-fluid" :src="workshop.imageUrl" :alt="workshop.name" />
        </div>
        <div class="col-12 col-lg-8">
          <div class="row">
            <div class="col-3">
              <p>
                <small>
                  {{ workshop.startDate | formatDate }}
                  -
                  {{ workshop.endDate | formatDate }}
                </small>
              </p>
              <p>
                <small class="text-muted">
                  {{ workshop.time }}
                </small>
              </p>
            </div>
            <div class="col-3">
              <p>
                <i class="fa" :class="`${workshop.modes.online ? 'fa-check' : 'fa-times'}`"></i>
                &nbsp;
                <small>Online</small>
              </p>
              <p>
                <i class="fa" :class="`${workshop.modes.inPerson ? 'fa-check' : 'fa-times'}`"></i>
                &nbsp;
                <small>In person</small>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12" v-html="workshop.description"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hey router! Please show the child component here -->
    <router-view></router-view>
  </div>
</template>

<script>
import { getWorkshopsById } from '@/services/workshops';

export default {
  name: 'WorkshopDetails',
  data() {
    return {
      status: 'LOADING',
      workshop: null,
      error: null,
    };
  },
  async created() {
    console.log('created - not yet appeared on the page');

    // alert( this.$route.params.id );

    this.status = 'LOADING';

    try {
      this.workshop = await getWorkshopsById(this.$route.params.id);
      this.status = 'LOADED';
    } catch (error) {
      this.status = 'ERROR';
      this.error = error;
    }
  },
  mounted() {
    console.log('mounted - appeared on the page');
  },
};
</script>

<style></style>
