<template>

  <div class="home">
    <img class="img-fluid" src="../assets/logo.png" width="400" height="400" />
    <h2 style="color:#343A40;font-family:STIX Two Text" >List of Vaccinated</h2>
    <div class="row justify-content-center">

  <div class="events">
    <div class="search-box">
      <BaseInput
        v-model="keyword"
        type="text"
        label="Search..."
        @input="updateKeyword"
      />
    </div>

    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        class="page-link; list-group-item list-group-item-action list-group-item-warning"
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page</router-link
      >

      <router-link
      class="page-link; list-group-item list-group-item-action list-group-item-warning"
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page</router-link
      >
    </div>
  </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

// import axios from 'axios'
export default {
  name: 'EventList',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    EventCard // register it as a child component
  },
  data() {
    return {
      events: null,
      totalEvents: 0, // <--- Added this to store totalEvents
      keyword: null
    }
  },

  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getEvents(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.events = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo) {
    var queryFunction
    if (this.keyword == null || this.keyword === '') {
      queryFunction = EventService.getEvents(
        3,
        parseInt(routeTo.query.page) || 1
      )
    } else {
      queryFunction = EventService.getEventByKeyword(
        this.keyword,
        3,
        parseInt(routeTo.query.page) || 1
      )
    }

    queryFunction
      .then((response) => {
        this.events = response.data // <-----
        this.totalEvents = response.headers['x-total-count'] // <-----
      })
      .catch(() => {
        return { name: 'NetworkError' }
      })
  },
  methods: {
    updateKeyword() {
      var queryFunction
      if (this.keyword === '') {
        queryFunction = EventService.getEvents(3, 1)
      } else {
        queryFunction = EventService.getEventByKeyword(this.keyword, 3, 1)
      }

      queryFunction
        .then((response) => {
          this.events = response.data
          console.log(this.events)
          this.totalEvents = response.headers['x-total-count']
          console.log(this.totalEvents)
        })
        .catch(() => {
          return { name: 'NetworkError' }
        })
    }
  },
  computed: {
    hasNextPage() {
      // First, calculate total pages
      let totalPages = Math.ceil(this.totalEvents / 3) // 2 is events per page

      // Then check to see if the current page is less than the total pages.
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-box {
  width: 300px;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
