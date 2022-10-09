<template>
<div class="HomeView">
    <div class="Subtitle">
        <h3>Comments</h3>
    </div>
    <div class="Sidebar">
        <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Autem</li>
            <li>Fugait</li>
            <li>Asperiones</li>
        </ul>
    </div>
    <div class="MainText">
        <p class="blurb">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores qui beatae possimus nesciunt aliquid accusamus suscipit magnam recusandae praesentium vitae eius quaerat tenetur, deserunt saepe omnis sequi? Molestiae, repudiandae consequuntur?
        </p>
        <p class="blurb">
            Autem quo iure fugiat asperiores veniam doloribus placeat reprehenderit, voluptatem, veritatis eum alias quae. Esse iste in sequi sint eum molestiae error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe minima sint laboriosam repudiandae quae dolor quos reprehenderit mollitia quo. Aut fuga similique vel maxime exercitationem ut beatae at enim.
        </p>
    </div>
    <div class="Footer">
        <p>COPYRIGHT © 1997 [$!?̷̳͒̃̂̈́̽̌̌$̵̡̛̞̖̼͐̎͗̇͂̽̐͋͑̀͊̇͘͠ͅ*̵̥̓́̌͌̒́̆͛̋͛̏͒̾̂͝!̷̡͖͊̂̒̚͝ͅ]̴̧͔̞̲̻͎̼̪̺̫̹͛͂͗̅̑̀͒̚͜͜ ̶̨̛̹̳͕̭͚͓̃͑̍̈́͊Ş̸̡̹͚̻̠͈͂̄̉̐̍̒̏̿̾́͑̽͗͛̕P̸̡̣̫͈͍̀̓́̍̎́̋͒̑͗͗͘͝͝ͅḀ̴̢̡̡͖̣͈̼̼͍̃̈̿̆̓̃̋̐̈́̕M̵̟͇̪̼̦̬͓̪͈͇̼̟̭̬̅̾̀͑͌̑̓̌̍͂͛̾̊͘͜͝T̵͈͔̪̭̹̪͎̯͚̩͇̖̥͔̄̈́͊̂̅̓̒͘͘O̸͋̅̈́̌͐̏̎̊̀͝ͅN̴̨̛̛͉̙̗̟̩͆͛̃͗̏̍͊̍̕͘̕ ̴̢͕͍̱̺͕̜͕͕̫̯̿̇̀͛̀̓̽̀͗͠ͅĢ̷̨̞̿̿͋ͅ.̸̩̣̦̭̈́̋͝ ̸̗͈̫́̇͐́͒́͋̃̾̕S̸̥̅̀P̵̠̥̘̞̟̾̑͋̓̀̈́̄̋̾̃̉̊̀ͅA̵̳͔̠̯͈͎̱̝̬̜͉͔͉̬̒̍̅̅́͗̑͛̾͘͜͠͝M̸̛̯̗̃̅̑̒͆̂̌̀̕T̴̺̪͕̻͚́̈́̓̌͌̅̿̓͘͘̕͜͠ͅO̵̩̺̥̞͒̋͋̃̄N</p>
    </div>
</div>
</template>

<style scoped>

.HomeView{
    box-sizing: border-box;
    display: grid;
    margin: 1vw;
    grid-template-rows: .25fr 10fr .5fr;
    grid-template-columns: .25fr 10fr;
    grid-template-areas: 
     "Sidebar Subtitle"
     "Sidebar MainText"
     "Footer Footer";
}
.Subtitle{
    grid-area: Subtitle;
    background-color: rgb(226, 170, 66);
}

.Sidebar{
    grid-area: Sidebar;
    background-color: rgb(93, 93, 255);
}

.MainText{
    grid-area: MainText;
    display: flex;
    background-color: rgb(78, 247, 78);
}

.Footer{
    grid-area: Footer;
    background-color: rebeccapurple;
}

.blurb{
    display: block;
    width: 50%;
    text-align: left;
    padding: 3vw;
    margin: 1vw;
    background-color: brown;
}
</style>