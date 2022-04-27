<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
    },
    {
      id: 17,
      name: "Alan Orn",
      tel: "1-206-619-4462",
      address: "877 Bradtke Isle",
      opening_hours: "08:00",
      description:
        "Totam sit quia autem qui illo molestiae in dolorum. Ea voluptatibus praesentium iure voluptatem eaque ea est. Incidunt neque non minus voluptas. Autem qui perferendis. Hic distinctio cum eum. Delectus et consectetur aspernatur.",
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
    },
    {
      id: 23,
      name: "Barry Mosciski",
      tel: "(825) 183-8498 x33982",
      address: "15204 Laurianne Mountain",
      opening_hours: "08:00",
      description:
        "Magni deserunt omnis a quisquam accusamus aut optio. Rerum doloremque voluptatem et in consequatur nulla. Aut magnam aut. Ex excepturi qui vero fugit suscipit totam ut.",
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
    },
    {
      id: 24,
      name: "Leila Schmidt I",
      tel: "(560) 046-7966 x627",
      address: "54507 Lehner Pines",
      opening_hours: "08:00",
      description:
        "Delectus ad ut debitis quae tempore. Sed impedit esse saepe itaque consequatur ipsa id consequatur. Et ut labore cum minus. Impedit quia sapiente explicabo sint dolore at facilis tenetur quibusdam. Laboriosam consequatur debitis beatae dolor.",
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
    },
    {
      id: 25,
      name: "Joannie Bahringer",
      tel: "1-978-579-3623 x9368",
      address: "996 Wilkinson Stream",
      opening_hours: "08:00",
      description:
        "Nostrum porro repellendus autem quia animi facilis est. Qui necessitatibus aut voluptatem nemo. Et quod repellat culpa. Reprehenderit voluptatem exercitationem aut sit dolor blanditiis.",
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
    },
    {
      id: 29,
      name: "Linda Hermiston",
      tel: "363-950-9186 x42584",
      address: "2635 Unique Mountain",
      opening_hours: "08:00",
      description:
        "Quas nisi amet. Libero et consequuntur veritatis laborum alias aut explicabo velit.",
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
    },
    {
      id: 34,
      name: "Rachelle Dicki",
      tel: "(012) 675-9760",
      address: "6213 Shana Dam",
      opening_hours: "08:00",
      description:
        "Ipsum enim ut magnam beatae. Quae voluptatibus consequatur labore occaecati. Illo commodi dolorem sit et numquam voluptatem. Et quam nulla sunt quaerat odit aut. Accusamus excepturi sint fugit. Hic blanditiis vitae placeat velit ut dolor facilis.\n \rEnim eligendi error consequatur illo quae. Quaerat voluptatem et velit maxime laborum aut minima quos mollitia. Tempore provident architecto itaque voluptas est. Aut laudantium inventore modi eum quo facilis delectus omnis. Quis autem ut similique pariatur quibusdam velit ea et corrupti.\n \rSaepe dolores dolorem aspernatur. Sed aut repellendus delectus ut. In consequatur cupiditate harum. Ut mollitia animi quod quod impedit voluptas. Quod quisquam eos.",
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
    },
    {
      id: 40,
      name: "Nettie Volkman",
      tel: "091-975-9792",
      address: "660 Deion Harbor",
      opening_hours: "08:00",
      description:
        "Quasi optio sequi aut voluptatibus. Laudantium adipisci quisquam impedit delectus modi voluptas optio magni consequatur. Et voluptatem error sequi aperiam. Nihil asperiores sint quae dolorem rerum ullam a non. Adipisci labore recusandae ipsum quos id reprehenderit odio autem.",
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
    },
    {
      id: 41,
      name: "Miss Ryan Hilll",
      tel: "(726) 943-1128",
      address: "7464 Carter Canyon",
      opening_hours: "08:00",
      description:
        "Et est sed. Quia aliquid qui excepturi voluptas ut eius voluptas. Nobis omnis dolores et et nihil deserunt placeat nihil veritatis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=87.5724381035341",
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
    },
    {
      id: 43,
      name: "Eldon Yundt",
      tel: "588-289-2798 x7981",
      address: "352 Daugherty Courts",
      opening_hours: "08:00",
      description:
        "Eveniet dolores occaecati aut tenetur earum nihil ipsum. Mollitia molestias amet laudantium. Modi facere rerum sunt voluptatibus. Vitae non praesentium et corrupti cum unde non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.29742608238084",
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
    },
    {
      id: 1,
      name: "Chadrick Beer",
      tel: "401.291.6196",
      address: "612 Gordon Grove",
      opening_hours: "08:00",
      description:
        "Et ut alias accusamus ut. Distinctio possimus sapiente reprehenderit ad et. At et et fugiat quas. Possimus qui ipsum deleniti et. Ex laudantium sint totam fugiat veniam.\n \rQuidem numquam doloribus vero minus eum numquam non. Error ex quas at nam. Et sint eligendi voluptatem aut. Id qui praesentium odio consequatur et eius aspernatur sequi voluptatem. Aut optio quos.\n \rId accusamus ut molestias eos eum voluptatem mollitia molestias consequatur. Iusto ipsa sit veritatis a porro. Sequi quaerat ut voluptas qui deleniti. Numquam quae consequuntur magnam omnis incidunt amet inventore aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.77626934151801",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 3,
      name: "Eleonore Mueller",
      tel: "(054) 274-0854",
      address: "27720 Jon Road",
      opening_hours: "08:00",
      description: "eius velit et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.736359666085583",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 5,
      name: "Priscilla Nitzsche",
      tel: "989-719-1392 x297",
      address: "933 Kuhlman Field",
      opening_hours: "08:00",
      description:
        "Facere dolorem mollitia est dolorem ut sunt aut quaerat. Quibusdam sunt voluptas minima enim ut ad et recusandae. Repudiandae ut eligendi qui mollitia tempore dolore.\n \rEt odio animi cupiditate et asperiores doloribus quibusdam recusandae similique. Sed earum autem. Eius quis impedit adipisci natus nostrum modi.\n \rQuia aut culpa perferendis. Aut architecto natus quia officia. Quo est ea labore cupiditate ea temporibus labore praesentium quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.99208481952255",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 14,
      name: "Dr. Donny Borer",
      tel: "1-604-642-1008 x457",
      address: "73697 Langworth Harbors",
      opening_hours: "08:00",
      description:
        "Eos est et suscipit. Delectus fugit suscipit fugit consequatur velit est doloribus. Quo voluptatem quae eos omnis ipsa non eius. Tempore magni excepturi nam aut et. Ipsa eligendi a. Corporis dolor magni et officia maxime beatae rerum et.\n \rQuia ipsam perferendis doloribus omnis magni eveniet aut. Quasi dolorum omnis qui expedita explicabo sit totam libero excepturi. Eveniet esse omnis consectetur labore a. Asperiores minima est hic rerum ea blanditiis quas et. Sequi laboriosam eos nulla officia sapiente qui corporis.\n \rQuas eos consequatur. Laborum autem voluptatum. Enim delectus aut qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.50060821738855",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 16,
      name: "Eliezer Kerluke",
      tel: "945-894-8631",
      address: "15442 Steuber Mount",
      opening_hours: "08:00",
      description: "culpa",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.60401436119514",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 19,
      name: "Lucie Botsford",
      tel: "039.401.3958 x1751",
      address: "1534 Jackie Wall",
      opening_hours: "08:00",
      description:
        "Vel pariatur qui alias eos numquam. Fugiat eligendi ipsa ut rerum asperiores placeat aut. Voluptatem doloribus quasi quidem ea dicta ea quia eligendi. Unde commodi sunt recusandae non. Pariatur occaecati dolor officiis vel laudantium.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=73.75972164884854",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 7,
      name: "Grace Fahey",
      tel: "1-305-119-3653",
      address: "0549 Balistreri Springs",
      opening_hours: "08:00",
      description:
        "Aut saepe aspernatur aperiam ratione in aperiam voluptatem. Suscipit saepe vel libero. Et voluptatem corporis velit blanditiis nam est quia. Qui qui rerum eaque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.71854114261088",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 8,
      name: "Trinity Bosco",
      tel: "(129) 651-8585",
      address: "429 Kianna Bridge",
      opening_hours: "08:00",
      description:
        "Distinctio quia velit. Pariatur sint totam nihil sit blanditiis. Repellat aliquam voluptate ut magni consequatur quidem qui voluptatem.\n \rPossimus sit laboriosam aperiam molestiae minima rerum laudantium. Voluptatem ipsa qui ullam blanditiis alias. Aut et et architecto placeat magni. Et et dolor omnis sequi rem.\n \rSint iusto voluptate ducimus esse labore. Perferendis aliquid aliquam sint occaecati est et. At voluptatem molestiae excepturi itaque officia maiores distinctio. Necessitatibus iste dolor et ea veritatis et nihil. Ut et debitis praesentium praesentium labore numquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.349705704373943",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 9,
      name: "Cleo Renner",
      tel: "1-285-294-1302 x774",
      address: "099 Neva Station",
      opening_hours: "08:00",
      description:
        "Recusandae necessitatibus dolorem. Et fuga vitae molestiae debitis. In doloribus facere iusto.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.25137869377807",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 33,
      name: "Rodolfo O'Kon",
      tel: "228-212-4460",
      address: "5870 Rath Orchard",
      opening_hours: "08:00",
      description: "molestiae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.5238415985255",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 37,
      name: "Lizzie Littel",
      tel: "1-030-764-3377 x7089",
      address: "4371 Johns Harbor",
      opening_hours: "08:00",
      description: "Dolor sunt eum rerum enim.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.54706756939066",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 38,
      name: "Josh Greenholt",
      tel: "(463) 738-6389",
      address: "79553 Jaskolski Street",
      opening_hours: "08:00",
      description:
        "Omnis non voluptas dolorem consequatur praesentium. Deserunt nesciunt quo minus dignissimos omnis accusamus occaecati sunt deserunt. Impedit nulla nostrum dolores omnis nihil veniam. Maiores nostrum maxime dignissimos. Nulla molestiae quia quis est iste eos eum magni. Porro consequatur quaerat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.93679385564882",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 44,
      name: "Conor Lemke PhD",
      tel: "625.869.5247 x6221",
      address: "288 Beatty Place",
      opening_hours: "08:00",
      description: "facere non delectus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.68669919194602",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 50,
      name: "Reese Bednar",
      tel: "1-605-374-1726 x01779",
      address: "2032 Cruickshank Prairie",
      opening_hours: "08:00",
      description:
        "Aliquid dolorem adipisci. Rerum et iure quos nam earum aut. Veniam est cum. Quis consequatur dignissimos. Perferendis dolorem ea velit ea omnis qui quaerat. Odit possimus ullam.\n \rRepudiandae dolore fugit. Iure beatae est aliquid nihil ea non possimus. Ducimus veniam expedita aut ut at error soluta iste. Sint voluptas sit commodi eligendi occaecati earum. Repellendus perferendis ad rem et sit alias laborum. Repudiandae deleniti deserunt ducimus voluptas aliquam beatae adipisci aliquam.\n \rItaque eum nam unde et velit temporibus distinctio quas. Quasi debitis unde sit cum animi. Voluptas in velit ipsam. Corrupti ut rerum aliquid sunt ut sint.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.555490949550858",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 13,
      name: "Braeden Oberbrunner",
      tel: "725-106-9087",
      address: "706 Pfeffer Fords",
      opening_hours: "08:00",
      description:
        "Quo placeat consequatur quae. Deleniti praesentium ipsam aut veniam aut blanditiis sunt in molestiae. Blanditiis non debitis ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.884470560772037",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 18,
      name: "Walter Abshire",
      tel: "(885) 283-3069 x001",
      address: "91459 Ortiz Run",
      opening_hours: "08:00",
      description:
        "Numquam quae consequatur. Dolore perferendis sint non omnis minus quia voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=90.3468459566724",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 20,
      name: "Abdul Lehner",
      tel: "(074) 491-6501",
      address: "112 Eulalia Cliffs",
      opening_hours: "08:00",
      description:
        "Ad natus et non. Aut et et et. Iste laborum qui itaque ipsa magnam mollitia. Sint et nemo eius ipsam dolorem occaecati.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=63.543273726461514",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 21,
      name: "Randal Ruecker",
      tel: "666-685-0996",
      address: "003 Quincy Place",
      opening_hours: "08:00",
      description: "ea",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.503443530795025",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 22,
      name: "Freddy Simonis",
      tel: "486.101.5905 x7631",
      address: "18807 Dan Rest",
      opening_hours: "08:00",
      description: "non ad enim",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.1665653785638",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 31,
      name: "Clay Dach",
      tel: "(341) 245-8442 x11249",
      address: "999 Delia Station",
      opening_hours: "08:00",
      description: "ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.58151856003444",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 32,
      name: "Hortense Raynor",
      tel: "005.690.1609 x683",
      address: "40518 Krajcik Cliffs",
      opening_hours: "08:00",
      description: "Assumenda doloremque tempore incidunt aut sed.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.564709694425401",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 36,
      name: "Aileen Bergnaum",
      tel: "(420) 234-9547",
      address: "5136 Veda Brooks",
      opening_hours: "08:00",
      description: "Ut nihil et quis aspernatur quis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=94.66622376217461",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 39,
      name: "Hildegard Dare",
      tel: "1-466-418-4814",
      address: "9216 Gibson Drive",
      opening_hours: "08:00",
      description:
        "Ipsum sint officia quasi rerum nihil exercitationem illum molestiae dolor. Iusto exercitationem debitis aut dolor. Aliquid doloremque consequatur ut eum accusamus earum. Quis minus est ducimus voluptatem dolorem consequuntur dolores vero et. Quam voluptatum quia quibusdam esse provident vero consequatur velit.\n \rDelectus ut quae facere est eos mollitia voluptatem eum est. Temporibus sit et doloremque sit esse iusto. Sunt eligendi minus dolorem nihil ducimus. Et dolores aut facere labore magni dolorem quae. Esse sit consequuntur in.\n \rEt dignissimos laudantium. Consequatur quis dolorem repudiandae est aut eaque qui dolor. Ea sit non voluptatem sapiente maxime velit ab. Laudantium quisquam non nobis delectus. Quae soluta voluptates sapiente explicabo qui tempora modi quia. Consectetur impedit ab totam ea voluptatem consequatur modi sint et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.09167642600843",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 42,
      name: "Ed McDermott",
      tel: "(431) 917-9436 x791",
      address: "109 Padberg Motorway",
      opening_hours: "08:00",
      description: "molestiae",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.660268349179994",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 45,
      name: "Amir Crist",
      tel: "(467) 515-6894 x972",
      address: "741 Rhea Ferry",
      opening_hours: "08:00",
      description:
        "Sunt quia neque quidem sed. Aperiam cupiditate quidem at. Voluptatum quaerat dolore asperiores provident ea.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.89565126705266",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 49,
      name: "Mrs. Jamel Walker",
      tel: "279-825-6343 x7425",
      address: "3543 Crystal Vista",
      opening_hours: "08:00",
      description: "omnis ab iusto",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.508137864625206",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 2,
      name: "Dr. Kaylin Waelchi",
      tel: "965.788.2053 x93193",
      address: "4390 Lamont Villages",
      opening_hours: "08:00",
      description:
        "Voluptate ut sit quod. Sint aut quis similique qui ab odit. Tenetur est impedit sed molestiae a quos. Repellendus praesentium rerum repellendus natus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=83.78647368669694",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 4,
      name: "Lionel Mertz",
      tel: "987-735-2268",
      address: "939 Hintz Cape",
      opening_hours: "08:00",
      description: "ab inventore eos",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.14202400485465",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 6,
      name: "Felicity Kling",
      tel: "(016) 092-5684 x1121",
      address: "60381 Reilly Mills",
      opening_hours: "08:00",
      description:
        "Ut quis est. Incidunt sed enim perspiciatis voluptas. Placeat laborum eos. Enim et nihil. A est eum enim ipsam nobis tempore et quam dolores. Fugiat veniam quas suscipit optio.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=19.752567543875443",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 10,
      name: "Mohamed Goyette",
      tel: "1-532-322-5308",
      address: "4269 Marc Harbors",
      opening_hours: "08:00",
      description: "est",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.58093382954678",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 12,
      name: "Kobe Kshlerin",
      tel: "(180) 418-6224",
      address: "38915 Schinner Walks",
      opening_hours: "08:00",
      description:
        "Eaque nihil autem enim.\nQui aut placeat eligendi non vel temporibus beatae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.77866369240814",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 15,
      name: "Stefan Harris",
      tel: "1-791-459-6105 x713",
      address: "307 Schuster Lodge",
      opening_hours: "08:00",
      description:
        "Dicta qui in autem sint vero minus possimus. Consectetur dolorem est eligendi non. Neque numquam corrupti sint enim sequi aut magnam aut. Temporibus consectetur reiciendis quis temporibus ut amet. Voluptas hic saepe in saepe odit.\n \rOptio aperiam tempora deserunt neque. Odit dolorum dolore. Molestiae et sit voluptates laudantium dicta sit sequi laborum. Eveniet rem accusamus.\n \rIusto illo dolorum dolore ullam. Odit quis voluptate. Voluptate quia mollitia vero autem impedit nisi tempore laborum facere. In voluptates porro nobis assumenda ea sunt. Recusandae itaque ut pariatur et modi inventore voluptas voluptatibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=46.55599604435567",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 26,
      name: "Camilla Reilly",
      tel: "1-605-647-5291",
      address: "50696 Kilback Stream",
      opening_hours: "08:00",
      description:
        "Vel numquam veritatis nihil unde delectus quidem. Nesciunt quod quod distinctio a ipsam est quas animi. Illo necessitatibus ipsam eum est est qui. Perspiciatis laboriosam fugit officiis repellat distinctio molestias totam. Ea vero nulla est voluptate consequatur tempore.\n \rAut ducimus qui enim tenetur. Ex voluptates aut quis molestiae ut. Rerum vel delectus nobis qui quia quasi.\n \rId quisquam voluptas sunt aspernatur. Iste voluptas aut dolores autem molestiae quis eveniet doloremque nihil. Fuga blanditiis ut itaque amet autem voluptas. Ab accusamus sit repellat. Corporis maiores aut praesentium et dolore et in vel.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.420521800109086",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 27,
      name: "Lourdes Cummerata",
      tel: "920-653-4808",
      address: "60172 Okuneva Forges",
      opening_hours: "08:00",
      description: "blanditiis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.14724985617738",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 28,
      name: "Eusebio Zboncak",
      tel: "(392) 671-8778 x28710",
      address: "976 Koepp Way",
      opening_hours: "08:00",
      description:
        "Sed aut perferendis esse debitis eaque officia.\nExplicabo earum animi vero voluptatibus quo.\nConsectetur ratione dolor.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=4.299799467812937",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 46,
      name: "Una Donnelly MD",
      tel: "(161) 423-1714 x2330",
      address: "032 Thompson Springs",
      opening_hours: "08:00",
      description: "consequatur ea veritatis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.14071777307304",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 47,
      name: "Mrs. Shaylee Bins",
      tel: "626.929.8298 x8506",
      address: "081 Bednar Prairie",
      opening_hours: "08:00",
      description:
        "Facilis omnis ex ea ducimus.\nMolestiae sint sed blanditiis totam neque id voluptatum accusamus perferendis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.386655048083185",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
    {
      id: 48,
      name: "Monique Hoppe",
      tel: "706.471.2067 x009",
      address: "94440 Yost Center",
      opening_hours: "08:00",
      description: "Minima vel sint atque accusamus sunt ratione nihil amet.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.61517527035042",
      viewCounts: 0,
      createdAt: "2022-04-22T16:12:13.000Z",
      updatedAt: "2022-04-22T16:12:13.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-22T16:12:13.000Z",
        updatedAt: "2022-04-22T16:12:13.000Z",
      },
    },
  ],
};

export default {
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
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>