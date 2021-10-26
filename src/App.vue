<template>
<header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="https://www.img.in.th/images/8a11a0b106ed2410df3fe77d703b7b43.png" alt="8a11a0b106ed2410df3fe77d703b7b43.png" border="0" width="50" height="50"/>
        </a>

        <ul class="nav justify-content-center">
          <li><a href="/home" class="nav-link px-2 text-white" style="font-family:STIX Two Text;">‎ꔛ Home⠀⠀| </a></li>
          <li><a href="/about" class="nav-link px-2 text-white" style="margin-left; font-family:STIX Two Text;">About us ‎ꔛ</a></li>⠀⠀⠀⠀⠀⠀⠀⠀⠀
          <!-- <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li> -->
        </ul>
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        <div class="text-end">
          <nav class="navbar navbar-expand">
      <ul v-if="!GStore.currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link list-group-item-warning">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link list-group-item-warning">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </ul>
      <ul v-if="GStore.currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ GStore.currentUser.name }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="logout">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </ul>
    </nav>
        </div>
      </div>
    </div>
  </header>

  <!-- login -->
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>


    <!-- <router-link :to="{ name: 'EventList' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
     <span v-if="isAdmin"> |
    <router-link :to="{ name: 'AddEvent' }">New Event</router-link>
    </span>
  </div> -->
<div class="container mt-3">
    <router-view />
  </div>
  
  <!-- new element -->
  <!-- <router-view /> -->
</template>
<script>
import AuthService from '@/services/AuthService.js'
export default {
  inject: ['GStore'], // <----
   computed: {
    currentUser() {
      return localStorage.getItem('user')
    },
    currentDoctor() {
      return localStorage.getItem('ROLE_DOCTOR')
    },
    isAdmin() {
      return AuthService.hasRoles('ROLE_ADMIN')
    }
    },
  methods: {
    logout() {
      AuthService.logout()
      this.$router.go()
    }
  }
}
</script>
<style>
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
#app {
  /* position: fixed;
    width: 100%;
    height: 100%; */
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-image: url("../src/assets/background.png");
  background-size: cover;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #343A40;
}

#nprogress .bar {
  background: #343A40 !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px #343A40 , 0 0 5px #343A40;
}

#nprogress .spinner .spinner-icon {
  border-top-color: #343A40;
  border-left-color: #343A40;
}
.col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
    margin-left: auto;
}
h4 {
  font-size: 20px;
}
</style>