<template>
    <div class="add">
        <input type="text" placeholder="Author Name" v-model="formValues.AuthorName">

        <input type="text" placeholder="About" v-model="formValues.About">

        <input type="text" placeholder="Image URL" v-model="formValues.Img">

        <input type="text" placeholder="Contact E-Mail" v-model="formValues.Contact">
        <button @click="insertDoc">Insert Document</button>
    </div>
</template>

<script>
    const api = "https://fabulous-cocada-f68050.netlify.app/.netlify/functions/api/";
    export default{
        name: 'AddView',
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
            // POST 
            insertDoc(){
                fetch(api, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.formValues)
                })
                .then((response) => response.text())
                .then((data) => {
                console.log(data)
                this.$router.push('/')
                })
                .catch((err) => {
                if (err) throw err;
                })
            },
            mounted(){
            fetch(api)
                .then((response) => response.json())
                .then((data) => {
                // console.log(data)
                this.profiles = data
                })
                .catch((err) => {
                if (err) throw err;
                })
            }
        }
    }
</script>