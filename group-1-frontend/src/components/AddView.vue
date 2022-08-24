<template>
    <div>
        <input type="text" placeholder="About" v-model="formValues.About">
        <input type="text" placeholder="AuthorName" v-model="formValues.AuthorName">
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
                About: "",
                AuthorName: "",
                Img: "",
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