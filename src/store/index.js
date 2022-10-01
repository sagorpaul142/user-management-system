import { createStore } from "vuex"

const store = createStore({
    state: {
        users: [
            {
                id: 1,
                name: "julian",
                role: "user",
                email: "julian@gmail.com",
                phone: "+8801729719535",
                image: "https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_960_720.jpg"
            },
            {
                id: 2,
                name: "alexander",
                role: "user",
                email: "alexander@gmail.com",
                phone: "+8801892568941",
                image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000"
            },
            {
                id: 3,
                name: "alex suprun",
                role: "admin",
                email: "alexsuprun@gmail.com",
                phone: "+8801625684915",
                image: "https://cdn01.alison-static.net/careers/career/computer-engineer.jpg"
            },
            {
                id: 4,
                name: "ed pylypenko",
                role: "user",
                email: "edpylypenko@gmail.com",
                phone: "+8801322356894",
                image: "https://img.freepik.com/premium-photo/profile-photo-programmer-lady-look-monitor-smile_274222-22814.jpg?w=2000"
            },
            {
                id: 5,
                name: "foto sushi",
                role: "admin",
                email: "fotosushi@gmail.com",
                phone: "+8801925634256",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHFkLmITAHeLKJZytbmberMWje7uYfItrmg&usqp=CAU"
            },
            {
                id: 6,
                name: "michael",
                role: "user",
                email: "michael@gmail.com",
                phone: "+8801564892635",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsmSxrJpycLq-Wk5T79AOYAn81ZH-GKGpUA&usqp=CAU"
            },
        ]
    },
    getters: {
        adminList(state) {
            return state.users.filter(user => user?.role === "admin")
        },
        userList(state) {
            return state.users.filter(user => user?.role === "user")
        }
    },
})

export default store