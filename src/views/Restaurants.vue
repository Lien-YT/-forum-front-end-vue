<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories"/>

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"/>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsPagination from "./../components/RestaurantsPagination";

const dummyData = {
  restaurants: [
    {
      id: 11,
      name: "Fleta Miller",
      tel: "1-869-044-6850",
      address: "5875 Emard Path",
      opening_hours: "08:00",
      description: "laborum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.72442100334794",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 17,
      name: "Alan Orn",
      tel: "1-206-619-4462",
      address: "877 Bradtke Isle",
      opening_hours: "08:00",
      description: "Totam sit quia autem qui illo molestiae in dolorum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.378172475037815",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 23,
      name: "Barry Mosciski",
      tel: "(825) 183-8498 x33982",
      address: "15204 Laurianne Mountain",
      opening_hours: "08:00",
      description: "Magni deserunt omnis a quisquam accusamus aut opti",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.61313025228697",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 24,
      name: "Leila Schmidt I",
      tel: "(560) 046-7966 x627",
      address: "54507 Lehner Pines",
      opening_hours: "08:00",
      description: "Delectus ad ut debitis quae tempore. Sed impedit e",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.236137741821924",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 25,
      name: "Joannie Bahringer",
      tel: "1-978-579-3623 x9368",
      address: "996 Wilkinson Stream",
      opening_hours: "08:00",
      description: "Nostrum porro repellendus autem quia animi facilis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.19840153837934",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 29,
      name: "Linda Hermiston",
      tel: "363-950-9186 x42584",
      address: "2635 Unique Mountain",
      opening_hours: "08:00",
      description: "Quas nisi amet. Libero et consequuntur veritatis l",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.7978809230315",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 30,
      name: "Justice Boehm",
      tel: "422-547-1403 x8385",
      address: "84994 Dejon Spurs",
      opening_hours: "08:00",
      description: "Iusto est eveniet dolore aperiam aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.739886768552363",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 34,
      name: "Rachelle Dicki",
      tel: "(012) 675-9760",
      address: "6213 Shana Dam",
      opening_hours: "08:00",
      description: "Ipsum enim ut magnam beatae. Quae voluptatibus con",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.59580091401297",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 35,
      name: "Yolanda Bernier",
      tel: "475-309-2107",
      address: "589 Santos Trail",
      opening_hours: "08:00",
      description: "sit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.4068649597109",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 40,
      name: "Nettie Volkman",
      tel: "091-975-9792",
      address: "660 Deion Harbor",
      opening_hours: "08:00",
      description: "Quasi optio sequi aut voluptatibus. Laudantium adi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=26.20163140290961",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  components: {
    NavTabs,
    RestaurantsNavPills,
    RestaurantCard,
    RestaurantsPagination,
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    },

  }
};
</script>