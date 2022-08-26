<template>
    <div class="about">
         <section id="body">
    <section id="container">
        <div id="about">

            <p>Classly was created for the purpose of showcasing various different pieces of work designed and created by students at Yoobee College Christchurch campus. This app is to make it easier for users to browse different pieces of work and receive information about each one such as a description, the name of the creator and their contact information. Users can also add their own work to the app, making it easier for students to save and share their work as well as being able to view their classmates work. </p> 
            <br>
            <p>Classly was created by Amy Crampton, Vincent Zhang, Moysar Lulu, Kay Zhang and Kristika Barrington </p>

        </div>

    </section>
</section>
    </div>
</template>

<script>
    export default{
        name: 'AboutView'}
</script>

<style scoped>
#body {
    text-align: center;
    justify-content: center;
}

#container {
    border-radius: 30px;
    background-color:#e3dceb;
    width: 90vw;
    padding: 20px;
    margin: 40px;
  
}

#about {
    background-color: white;
    border-radius: 30px;
    margin: 50px;
    padding: 50px;
    overflow-y: scroll;
    box-shadow: 10px 10px 10px #9b9b9b;


}

#about p {
    font-family: 'Montserrat', sans-serif;
    color: black;
    opacity: 100%;
    

    
}</style>