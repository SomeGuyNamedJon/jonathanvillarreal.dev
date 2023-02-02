<template>
    <div class="MainView">
        <div class="Face">
            <img id="face" src="@/assets/images/Me.jpg" height="375"/>
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
            <img id="diploma" src="@/assets/images/diploma.png" width="500"/>
        </div>

        <div class="Neofetch">
            <img id="neofetch" src="@/assets/images/neofetch.png" width="560"/>
        </div>
        <div class="Linux blurb">
            <h2>My experience with Linux</h2>
            <p>
                Linux is a big part of my life. I first gained a fascination with the operating system in high school when
                I was trying to revive a hand-me-down laptop that orginally ran Windows Vista. After having to reinstall
                Vista several times because it would always result in an irrecoverable BSoD, I began looking for options and
                discovered Ubuntu. I believe it was release 11.04. I became obessed with the idea of a free alternative that
                allowed you do whatever with your system. Total freedom might come with the ability to break things, but I took
                it in stride. What really sold me was the customization options, not only within a given desktop environment,
                but what your desktop environment even was. Needless to say I spent a lot of time distro and environment hopping
                after that. I wanted to consume as much as I could, experience all the options out there. Nowadays I'm running
                EndeavourOS for my work and gaming machines configured using bspwm the tiling window manager.
            </p>
        </div>
    </div>
</template>

<style scoped>
    .MainView{
        box-sizing: border-box;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
        "Face Profile" 
        "School Diploma"
        "Neofetch Linux";
    }
    .blurb {
        outline: var(--dark-grey) solid 5px;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.26);
        text-align: justify;
        padding-inline: 10%;
        padding-bottom: 5%;
        margin-bottom: 10%;
    }

    #face, #diploma, #neofetch{
        border-radius: 5px;
        outline: var(--dark-grey) solid 5px;
    }
    #neofetch{
        padding-block: 20px;
        padding-inline-end: 5px;
        background-image: linear-gradient(
            165deg,
            transparent 0% 10%,
            rgba(14, 14, 14, 0.75) 35%,
            var(--deep-dark-purple) 100%
            );
    }
    .Face{
        grid-area: Face;
        position: relative;
        top: 5%;
        left: 15%;
        z-index: 1;
    }
    .Diploma {
        grid-area: Diploma;
        position: relative;
        right: 6%;
        top: 5%;
    }
    .Neofetch {
        grid-area: Neofetch;
        position: relative;
        top: 5%;
        left: 5%;
        z-index: 1; 
    }

    .Profile {
        grid-area: Profile;
        position: relative;
        right: 10%;
    }
    .Linux {
        grid-area: Linux;
        position: relative;
        right: 10%;
    }
    .School{
        grid-area: School;
        position: relative;
        left: 10%;
    }
    
    @media screen and (max-width: 850px){
        .MainView {
            grid-template-rows: min-content min-content min-content min-content min-content min-content;
            grid-template-columns: 1fr;
            grid-template-areas: 
            "Face"
            "Profile"
            "Diploma"
            "School"
            "Neofetch"
            "Linux";
        }
        #face, #diploma, #neofetch {
            height: auto;
            width: 75vw;
            margin-bottom: 10%;
        } 
        .Face, .Diploma, .Neofetch, .Profile, .School, .Linux {
            position: static;
            margin-inline: 5%;
        }
    }
</style>