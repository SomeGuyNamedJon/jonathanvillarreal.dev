<template>
    <div class="MainView">
    <div class="FaceImage">
        <img src="@/assets/images/Me.jpg"/>
    </div>
    <div class="Profile">
        <h2>Who am I?</h2>
        <p>
            Hi, I'm Jon, an aspiring software engineer and recent university graduate. 
            I'm passionate about video games, cartoons, anime, and technology. I'm a Linux and FOSS fanatic.
            I grew up in San Antonio, TX. It's where I attained my education and spent most of my life.
            I've recently moved to California to live with my fiancée and her family. I'm looking towards
            joining the work force as a new developer. Always looking forward towards expanding my knowledge
            and eager to make a name for myself.
        </p>
    </div>
    </div>
</template>

<style scoped>
    .MainView{
        box-sizing: border-box;
        display: grid;
        grid-template-rows: min-content;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
            "FaceImage Profile";  
    }
    .FaceImage{
        grid-area: FaceImage;
    }
    .Profile{
        grid-area: Profile;
        text-align: justify;
        margin-right: 20%;
    }
</style>