<template>
 <div class="row justify-content-center mt-md-4 mt-sm-4">
    <div class="container col-md-10 col-sm-12" id="content">
      <div class="row justify-content-center">

        <!-- Show first dose infornation  -->
        <div class="col-md-8 col-sm-12">
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀
          <h3>❝ {{ event.name }}  {{ event.surname }} ❞</h3>⠀⠀⠀⠀⠀
          <p>
            <span class="font-weight-bold p-1 rounded mr-1" id="title"
              >Status :</span
            >
            {{ event.status }}
          </p>
          <p>
            <span class="font-weight-bold p-1 rounded mr-1" id="title"
              >Dose 1 : </span
            >
            {{ event.type }}
          </p>
          <p>
            <span class="font-weight-bold p-1 rounded mr-1" id="title"
              >Dose 2 : </span
            >
            {{ event.type2 }}
          </p>


          <br>
          <span v-if="isAdmin || isDoctor">
            <button @click="Dcomment" class="btn btn-dark"> Doctor's comment </button>
          </span>
          <br>
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AuthService from '@/services/AuthService.js'
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    Dcomment(){
      this.$router.push({
        name: 'Doccom',
        params: { id: this.event.id }
      })
      this.GStore.flashMessage2 = 'Comment from Doctor to ' + this.event.name
      setTimeout(() => {
        this.GStore.flashMessage2 = ''}
      ,3000)
    },
  },
  computed: {
    currentUser() {
      return localStorage.getItem('user')
    },
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
    },
    isDoctor() {
      return AuthService.hasRoles('ROLE_DOCTOR')
    }
    },
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