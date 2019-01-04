import axios from "axios"

const instance = axios.create({
  baseURL: "https://react-my-burger-a0257.firebaseio.com/"
})
export default instance
