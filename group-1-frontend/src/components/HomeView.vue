<template>
<div>
      <h2>Profile Count: {{profiles.length}}</h2>
        <input type="text" v-model.trim="id">
        <input type="text" placeholder="firstName" v-model="formValues.firstName">
        <input type="text" placeholder="lastName" v-model="formValues.lastName">
        <input type="text" placeholder="imageUrl" v-model="formValues.imageUrl">
        <button @click="updateDoc">Update Document</button>

      <ul>
        <li v-for="profile in profiles" :key="profile">
        <div>
            <img :src="profile.imageURL" alt="">
            {{profile._id}}
            {{profile.firstName}}
            {{profile.lastName}}
            {{profile.About}}
            {{profile.AuthorName}}
            {{profile.Img}}

            <a href="#" @click="getDoc(profile._id)">Edit</a> | 
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
        profiles: [],
        id: "",
        formValues: {
          About: "",
          AuthorName: "",
          Img: "",
        }
      }
    },
    methods: {
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
           this.getAll();
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