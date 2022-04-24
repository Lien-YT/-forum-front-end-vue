<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UserCard  class="col-3" v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import UserCard from "./../components/UserCard";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$rkirLWFS/RZWxLJCUX8tNej2SrKUmu/q5f0UU1V05Y7vAfbC6ri.O",
      isAdmin: true,
      image: null,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$s2ckFfOA3f8vhJk.p13RmOG/y/r09n4TH5Sb/Md8yDdue421SGPEG",
      isAdmin: false,
      image: null,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$n1tAp6Z.Hu9IV.9V6KPBBOex15W7//o/e.8DnkV6OBvOExL/lj7s6",
      isAdmin: false,
      image: null,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  name: 'UsersTop',
  components: {
    NavTabs,
    UserCard
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    fetchTopUsers() {
      this.users = dummyData.users
    }
  },
};
</script>