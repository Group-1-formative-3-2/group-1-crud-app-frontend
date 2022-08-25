<template>
    <div  class="about-body">
        <div class="about-container">
            <div class="about">

            <p>Lorem ipsum dolor sit amet. Et minus sint qui sequi quia ad deserunt officia. Qui voluptates aperiam est perspiciatis fugiat a repudiandae explicabo non enim illo. </p> 
            <br>
            <p>Eum quae soluta et adipisci molestiae et obcaecati galisum et doloremque ipsum non itaque ipsam At quis magni. Quo quia voluptatem sed quod voluptates ut autem fugiat aut quia nihil et eveniet laudantium est blanditiis libero. </p>
            <br>
            <p>Et neque animi id officiis asperiores et quaerat laboriosam qui debitis delectus non architecto eius. In ratione beatae non pariatur fuga et praesentium similique. </p>
            <br>
            <p>Ea maxime expedita et ullam impedit aut soluta consequatur ut praesentium architecto. Id iste quaerat id iste esse qui commodi itaque est expedita nesciunt. Est commodi minima sed sunt ullam non voluptatum officia ex laborum voluptas qui exercitationem impedit  tempore dolor. Et voluptas eligendi qui earum autem et consequatur nesciunt qui consequatur distinctio non molestiae quia ut omnis sapiente. </p>
       

            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'AboutView'}
</script>


<style>
.about-body {
    text-align: center;
    justify-content: center;
}

.about-container {
    border-radius: 30px;
    width: 90vw;
    padding: 20px;
    margin: 40px;
    background-color: var(--background);
  
}

.about {
    background-color: white;
    border-radius: 30px;
    margin: 50px;
    padding: 50px;
    overflow-y: scroll;
    box-shadow: 10px 10px 10px #9b9b9b;
    text-align: left;

}

#about p {
    font-size: 22px;
    font-family: 'Montserrat', sans-serif;
    color: black;
    opacity: 100%;
    text-align: left;    
}



</style>