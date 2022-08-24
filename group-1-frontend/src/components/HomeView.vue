<template>
<div>
      <h2>Profile Count: {{profiles.length}}</h2>
      <ul>
        <li v-for="profile in profiles" :key="profile">
        <div>
            <img :src="profile.imageURL" alt="">
            {{profile._id}}
            {{profile.firstName}}
            {{profile.lastName}}

            <a class="editbtn" href="#" @click="getDoc(profile._id)">Edit</a> | 
            <a class="deletebtn" href="#" @click="deleteDoc(profile._id)">Delete</a>
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