<template>
<div class="home">
      <!-- <h2>Profile Count: {{profiles.length}}</h2> -->
      
      
      <ul class="profileGrid">
        <li v-for="profile in profiles" :key="profile" >
        <div class="profile">
          <div class="profLeft">

            <img :src="profile.imageUrl" alt=""/>
            <div class="leftBtns">

              <button class="editBtn" ><a href="#" @click="getDoc(profile._id)">Edit</a></button>  

              <button class="delBtn" ><a href="#" @click="deleteWork(profile._id)">Delete</a></button>

            </div>
          </div>
          <div class="profRight">
            <small>ID: {{profile._id}}</small>
            <p>Name: {{profile.firstName}}</p>

            <p>{{profile.lastName}}</p>

           
            
            

          </div>
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