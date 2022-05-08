import { apiHelper } from "../utils/helpers"
const getToken = () => localStorage.getItem('token')

export default {
  getCurrentUser() {
    return apiHelper.get('/get_current_user')
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  getTopUsers() {
    return apiHelper.get('/users/top'), {
      headers: { Authorization: `Bearer ${getToken()}` }
    }
  },
  update({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },

  // 以下為使用者對其他使用者
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  },

  // 以下為使用者對個別餐廳
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  }
}