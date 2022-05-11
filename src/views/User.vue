<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- UserProfileCard -->
      <UserProfileCard
        :profile="profile"
        :initial-is-followed="isFollowed"
        :current-user="currentUser.id === profile.id"
      />
      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingCard -->
          <UserFollowingsCard :followings="followings" />
          <br />
          <!-- UserFollowersCard -->
          <UserFollowersCard :followers="followers" />
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <UserCommentsCard :comments="comments" />
          <br />
          <!-- UserFavoritedRestaurantsCard -->
          <UserFavoritedRestaurantsCard
            :favorited-restaurants="favoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UserProfileCard from "../components/UserProfileCard";
import UserFollowingsCard from "../components/UserFollowingsCard";
import UserFollowersCard from "../components/UserFollowersCard";
import UserCommentsCard from "../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard";
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      profile: {
        id: -1,
        name: "",
        email: "",
        image: "",
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        followersLength: 0,
        followingsLength: 0,
      },
      isFollowed: false,
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: []
    };
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  beforeRouteUpdate (to, from, next) {
    console.log(
      to,
      from
    )
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId })
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { profile, isFollowed } = data
        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = profile;

        this.profile = {
          ...this.profile,
          id,
          name,
          email,
          image,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
          followersLength: Followers.length,
          followingsLength: Followings.length,
        };
        this.isFollowed = isFollowed;
        this.comments = Comments;
        this.favoritedRestaurants = FavoritedRestaurants;
        this.followers = Followers;
        this.followings = Followings;
      } catch (error) {
        console.error(error.message)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    },
  },
};
</script>