<template>
<div class="home">
      <h2>Profile Count: {{profiles.length}}</h2>
      <ul>
        <li v-for="profile in profiles" :key="profile">
        <div>

            {{profile._id}}
            <img :src="profile.imageUrl" alt="">

            {{profile.firstName}}
            {{profile.lastName}}

            <a href="#" @click="getDoc(profile._id)">Edit</a> | 
            <a href="#" @click="deleteWork(profile._id)">Delete</a>
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
          firstName: "",
          lastName: "",
          imageUrl: ""
        }
      }
    },
    methods: {
      getDoc() { 
        fetch(api + this.id, {
            method: 'GET'
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
          })
          .catch((err) => {
            if (err) throw err;
          })
      },
      deleteDoc() { 
        fetch(api + this.id, {
            method: 'DELETE'           
          })
          .then((response) => response.text())
          .then((data) => {
            console.log(data)
          })
          .catch((err) => {
            if (err) throw err;
          })
        
      }
    },
    mounted(){
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          this.profiles = data
        })
        .catch((err) => {
          if (err) throw err;
        })
    }
  }
</script>