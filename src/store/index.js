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
    mutations: {
        ADD_USER(state, newUser) {
            state.users = [...state.users, newUser]
        },
        UPDATE_USER(state, newUser) {
            let index = state.users.findIndex(user => user.id === newUser.id)
            state.users = [
                ...state.users,
                state.users[index].name = newUser.name,
                state.users[index].email = newUser.email,
                state.users[index].phone = newUser.phone,
                state.users[index].image = newUser.image,
                state.users[index].role = newUser.role,
            ]
        },
        DELETE_USER(state,id) {
            state.users = state.users.filter(user => user.id !== id)
        }
    },
    actions: {
        addUser({ commit }, newUser) {
            let id = this.state.users.length + 1
            newUser.id = id
            commit("ADD_USER", newUser)
        },
        updateUser({ commit }, user) {
            commit("UPDATE_USER", user)
        },
        deleteUser({ commit }, id) {
            commit("DELETE_USER", id)
        }
    }
})

export default store