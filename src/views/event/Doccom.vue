<template>
  <div class="row justify-content-center mt-md-4 mt-sm-4">
    <div class="container col-md-10 col-sm-12" id="content">
      <div class="row justify-content-center">
        <div class="col-md-8 col-sm-12">
          <div id="flashMessage2" v-if="GStore.flashMessage2">
            {{ GStore.flashMessage2 }}
          </div>
          <br />
          <form class="review-form" @submit.prevent="onSubmit">
            <h2 class="doc">˗⠀ˏˋ⠀ Doctor's Comment⠀ ˎ⠀ˊ⠀˗</h2>
            <label class="doc" for="name" style="font-size: 18px"
              >꒰ ❛ Name: ❜ ꒱</label
            >
            <input class="mon" id="name" v-model="name" />
            <br />
            <br />
            <label class="doc" for="review" style="font-size: 18px"
              >꒰ ❛ Comment: ❜ ꒱</label
            >
            <textarea class="mon" id="review" v-model="review"></textarea>
            <br />
            <br />

            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>

            <input class="button" type="submit" value="Submit" />
          </form>
          <br />
          <div class="review-container">
            <h3 class="doc">꒰ ❛ Comment ❜ ꒱</h3>
            <p class="doc">{{ keepTwo }}</p>
          </div>
          <!-- <form @submit.prevent="addSuggest(1)">
            <input
              type="text"
              placeholder="Suggest for 1st dose"
              v-model="suggest1"
              required
            />
            <button class="btn btn-dark btn-sm ml-1">Add</button>
          </form>
          <br>
          <p class="font-weight-bold p-1 d-inline rounded" id="title">
            Suggestion from doctor:
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//
// import PatientService from "@/service/PatientService.js";

export default {
  data() {
    return {
      name: '',
      names: [],
      review: '',
      reviews: [],
      keepTwo: ''
    }
  },

  inject: ['GStore'],
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '') {
        alert('Review is incomplete . Please fill out every field.')
        return
      }
      let productReview = {
        // name: this.name,
        // review: this.review
        name: this.name,
        review: this.review
      }
      this.$emit('review-submitted', productReview)
      //  this.review = ''
      //  this.name = ''

      this.reviews = this.review
      this.names = this.name
      this.keepTwo = 'Name:⠀' + this.names + '⠀⠀Comment:⠀' + this.reviews
    }
    //       addReview(review){
    //           this.reviews.push(review)
    //       }
  }
}
</script>

<style scoped>
#content {
  border: 1px solid #4d3e00;
  border-radius: 50px;
  background-color: #ffd900;
  margin-top: 15px;
  color: rgb(95, 87, 16);
}
</style>
