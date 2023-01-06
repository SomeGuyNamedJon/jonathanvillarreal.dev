<template>
    <div class="MainView">
    <div class="FaceImage">
        <img src="@/assets/images/Me.jpg"/>
    </div>
    <div class="Profile">
        <h2>Title</h2>
        <p>
            Labore quis aliquip labore ut ut in duis do exercitation. Ipsum veniam laboris duis laboris consequat sunt ullamco minim. Sunt cillum culpa nulla quis culpa sint pariatur do id ex voluptate. Nisi magna reprehenderit incididunt pariatur ex incididunt dolore sit Lorem reprehenderit. Laboris proident veniam excepteur exercitation pariatur consectetur laboris amet qui irure id.
            Labore mollit ex est ex fugiat mollit nostrud Lorem. Dolore cupidatat veniam sunt nostrud amet commodo. Eu ex exercitation aliqua fugiat mollit sint deserunt excepteur magna et dolor et. Ea minim cupidatat fugiat ad cupidatat elit labore nostrud deserunt qui. Cupidatat dolor consequat esse ad do magna. Occaecat labore aute aliquip adipisicing deserunt eiusmod enim quis.
            Reprehenderit Lorem sint sint est est quis culpa ut amet adipisicing reprehenderit culpa occaecat culpa. Id aute qui ut et labore et labore. Exercitation ex Lorem ipsum consectetur quis. Voluptate nulla reprehenderit cupidatat velit ut. Irure eu et dolor dolore non consectetur laborum. Esse anim occaecat occaecat irure eu est deserunt ut magna esse deserunt Lorem non adipisicing. Minim elit adipisicing irure nostrud eu aliquip enim.
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
    }
</style>