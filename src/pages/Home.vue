<template>
    <div class="grid-container">
        <div class="Face">
            <img id="face" src="@/assets/images/Me.jpg" height="325"/>
        </div>
        <div class="Profile blurb">
            <h2>Who am I?</h2>
            <p>
                Hi, I'm Jon, an aspiring software engineer and recent university graduate. 
                I'm passionate about video games, cartoons, anime, and technology. I'm a Linux and FOSS fanatic.
                I grew up in San Antonio, Texas. It's where I attained my education and spent most of my life.
                I've recently moved to California to live with my fiancée and her family. I'm looking towards
                joining the work force as a software developer. I have skills in fullstack web development, DevOps,
                game development, along with a solid understanding of the fundementals of computer science. I spent
                a lot of time programming in C in the quest for my degree. I'm quite a competent graphic designer
                if I do say myself. Before I decided to persue a degree in Computer Science I wanted to be an artist.
                Always looking forward towards expanding my knowledge and eager to make a name for myself.
            </p>
        </div>

        <div class="School blurb">
            <h2>Bachelor's in Computer Science</h2>
            <p>
                I achieved my degree at the University of Texas at San Antonio. It was a pleasant experience
                and I feel as my education was well rounded. I mainly spent my time learning core fundementals of
                computer science such as Data Structures, Discrete Mathmatics, Computer Architecture, and Operating
                Systems using lower level languages such as C and C++. For concepts that required greater abstraction
                such as Object Oriented Programming and Design Patterns there was Java. I learned and worked with MySQL
                in quite a few classes, including one dedicated to databases. I also spent some time with Python
                in a few courses as well as Game Development using C# in Unity. My last two semesters where pretty
                exclusively spent doing web development with JS, PHP, HTML, and CSS, along with the odd framework.
                Other languages I touched briefly where Lisp, awk, BASH, and x86 assembly. 
            </p>
        </div>
        <div class="Diploma">
            <img id="diploma" src="@/assets/images/diploma.png" width="425"/>
        </div>
    </div>
</template>

<style scoped>
    .blurb {
        outline: var(--dark-grey) solid 5px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.26);
        text-align: justify;
        padding-inline: 10%;
        padding-bottom: 5%;
        margin-bottom: 10%;
    }

    #face, #diploma{
        border-radius: 5px;
        outline: var(--dark-grey) solid 5px;
    }
    .Face{
        position: relative;
        top: 5%;
        left: 10%;
        z-index: 1;
    }

    .Profile{
        position: relative;
        right: 20%;
    }

    .School{
        position: relative;
        left: 20%;
    }
    .Diploma {
        position: relative;
        right: 3%;
        top: 5%;
    }
    
    @media screen and (max-width: 850px){
        #face {
            height: auto;
            width: 75vw;
            margin-bottom: 10%;
        }
        .Profile{
            height: auto;
        }
        .FaceImage, .Profile, .School {
            position: static;
            margin-inline: 5%;
        }
    }
</style>