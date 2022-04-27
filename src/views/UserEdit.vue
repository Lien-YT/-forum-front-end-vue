<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$/pJLK/1.61hJO9f7H3HKQOqSU5ERyiLzimg/e1WfnlPdoIqLv89ta",
    isAdmin: true,
    image: null,
    createdAt: "2022-04-18T08:11:33.000Z",
    updatedAt: "2022-04-18T08:11:33.000Z",
    Comments: [],
  },
};

export default {
  data() {
    return {
      user: {
        id: -1,
        image: "",
        name: "",
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    fetchUser(userId) {
      console.log("fetchUser", userId);
      this.user = dummyData.profile;
    },
    handleFileChange(e) {
      const { files } = e.target;
      console.log("file", files);
      if (files.length === 0) {
        this.user.image = ''
      } else {
        const imgURL = window.URL.createObjectURL(files[0])
        this.user.image = imgURL
      }
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form)
      console.log(formData)

      for (let [name, value] of formData) {
        console.log(name + ': ' + value)
      }
    },
  },
};
</script>