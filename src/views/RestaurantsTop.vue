<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              >Show</router-link
            >

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Henriette Kutch",
      tel: "641-182-5635 x784",
      address: "9574 Steuber Springs",
      opening_hours: "08:00",
      description: "Eaque omnis expedita non. Ullam ut et consequatur ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.179129340354727",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Percival Trantow",
      tel: "(926) 870-4612 x039",
      address: "9026 Theo Island",
      opening_hours: "08:00",
      description: "Molestiae veritatis ipsum et voluptatem.\nVel sit v",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.773925921418158",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Emmitt Hickle",
      tel: "1-676-822-7544 x00137",
      address: "016 Johathan Street",
      opening_hours: "08:00",
      description: "Excepturi porro velit quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.32541440737077",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Evie Lubowitz",
      tel: "1-102-958-0312 x7116",
      address: "63863 Harvey Roads",
      opening_hours: "08:00",
      description: "Dolor pariatur optio.\nAb excepturi odio illo labor",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.82565315304338",
      viewCounts: 0,
      createdAt: "2022-04-18T14:04:25.000Z",
      updatedAt: "2022-04-18T14:04:25.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Alejandrin Mosciski",
      tel: "340.801.4507 x7607",
      address: "269 Lamar Extension",
      opening_hours: "08:00",
      description: "Ut a illum aliquam mollitia ipsa nobis ut repellen",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.36450088514148",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Lucie Fadel V",
      tel: "1-717-347-6386 x15149",
      address: "515 Moore Tunnel",
      opening_hours: "08:00",
      description: "Unde voluptatibus commodi nemo ratione est volupta",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.8094845989795827",
      viewCounts: 0,
      createdAt: "2022-04-18T14:04:25.000Z",
      updatedAt: "2022-04-18T14:04:25.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Emanuel Ferry DDS",
      tel: "(835) 205-4133",
      address: "73752 Herminia River",
      opening_hours: "08:00",
      description: "Sit impedit labore. Voluptatem quas asperiores vit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.485999584282034",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Elliot Upton II",
      tel: "247-639-3380",
      address: "3362 Clare Bypass",
      opening_hours: "08:00",
      description: "est assumenda corporis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.153234490631549",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Kasandra Mills",
      tel: "869.217.8395 x250",
      address: "948 Ondricka Branch",
      opening_hours: "08:00",
      description: "omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.785891903430404",
      viewCounts: 0,
      createdAt: "2022-04-18T14:04:25.000Z",
      updatedAt: "2022-04-18T14:04:25.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Mrs. Gust Braun",
      tel: "075-613-1550 x98023",
      address: "71914 Richard Lodge",
      opening_hours: "08:00",
      description: "Accusamus animi magnam. Omnis maxime assumenda sin",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.039920978260142",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  name: "RestaurantsTop",
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    addFavorite(id) {
      this.restaurants = this.restaurants
      .map(restaurant => {
        if (restaurant.id !== id) {
          return restaurant
        }
        return {
          ...restaurant,
          isFavorited: true
        }
      }) 
    },
    deleteFavorite(id) {
      this.restaurants = this.restaurants
      .map(restaurant => {
        if (restaurant.id !== id) {
          return restaurant
        }
        return {
          ...restaurant,
          isFavorited: false
        }
      })
    },
  },
};
</script>