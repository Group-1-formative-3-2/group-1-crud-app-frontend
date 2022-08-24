<template>
    <div>

        <div class="updatedInfo" v-show="updatedInfoShow">
            <input type="text" v-model.trim="id" disabled placeholder="Work ID">
            <input type="text" placeholder="About" v-model="formValues.About">
            <input type="text" placeholder="Author Name" v-model="formValues.AuthorName">
            <input type="text" placeholder="image Url" v-model="formValues.Img">
            <button @click="updateDoc">Update Document</button>
        </div>

        <h2>Profile Count: {{profiles.length}}</h2>

        <ul>
            <li v-for="profile in profiles" :key="profile">
                <div>
                    <img :src="profile.Img" alt="">
                    {{profile._id}}
                    {{profile.About}}
                    {{profile.AuthorName}}

                    <a href="#" @click="getDoc(profile._id), updatedInfoShow = true">Edit</a> | 
                    <a href="#" @click="deleteDoc(profile._id)">Delete</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    const api = "https://fabulous-cocada-f68050.netlify.app/.netlify/functions/api/";
    export default{
        name: 'HomeView',
        data() {
        return {
            updatedInfoShow: false,
            profiles: [],
            id: "",
            formValues: {
            About: "",
            AuthorName: "",
            Img: ""
            }
        }
        },
        methods: {
            clearInputs(){
                this.About = ""
                this.AuthorName = ""
                this.Img = ""
            },
        getDoc(id) { 
            this.id = id
            fetch(api + this.id, {
                method: 'GET'
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.getAll();
            })
            .catch((err) => {
                if (err) throw err;
            })
        },
        updateDoc(){
            fetch(api + this.id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.formValues)
            })
            .then((response) => response.text())
            .then((data) => {
            console.log(data)
            alert("Work has been Updated")
            this.getAll()
            this.clearInputs()
            this.updatedInfoShow = false
            })
            .catch((err) => {
            if (err) throw err;
            })
        },
        deleteDoc(id) { 
            fetch(api + id, {
                method: 'DELETE'           
            })
            .then((response) => response.text())
            .then((data) => {
                console.log(data)
                alert("Work has been Deleted")
                this.getAll();
            })
            .catch((err) => {
                if (err) throw err;
            })
            
        },
        getAll() {
            fetch(api)
            .then((response) => response.json())
            .then((data) => {
            this.profiles = data
            })
            .catch((err) => {
            if (err) throw err;
            })
        }
        },
        mounted(){
        this.getAll();
        }
    }
</script>