<template>
    <div class="add">
        <input type="text" placeholder="firstName" v-model="formValues.firstName">
        <input type="text" placeholder="lastName" v-model="formValues.lastName">
        <input type="text" placeholder="imageUrl" v-model="formValues.imageUrl">
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