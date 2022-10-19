import { createRouter, createWebHistory } from "vue-router"
import Home from "../page/Home"
import User from "../page/User"

const routes = [
    {path:"/", name: "Home page", component:Home},
    {path:"/user", name: "User page", component:User},
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;