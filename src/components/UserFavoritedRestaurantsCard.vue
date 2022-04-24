<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favoriteRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="restaurant in favoriteRestaurants"
        :key="restaurant.id"
        :to="{
          name: 'restaurant',
          params: { id: restaurant.Favorite.RestaurantId },
        }"
      >
        <img :src="restaurant.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFavoritedRestaurantsCard",
  props: {
    favoriteRestaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>