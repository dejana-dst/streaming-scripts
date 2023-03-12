//load list of images from folder

message="Aatrox.png Ahri.png Akali.png Akshan.png Alistar.png Amumu.png Anivia.png Annie.png Aphelios.png Ashe.png Aurelion Sol.png Azir.png Bard.png Bel'Veth.png Blitzcrank.png Brand.png Braum.png Caitlyn.png Camille.png Cassiopeia.png Cho'Gath.png Corki.png Darius.png Diana.png Draven.png Dr. Mundo.png Ekko.png Elise.png Evelynn.png Ezreal.png Fiddlesticks.png Fiora.png Fizz.png Galio.png Gangplank.png Garen.png Gnar.png Gragas.png Graves.png Gwen.png Hecarim.png Heimerdinger.png Illaoi.png Irelia.png Ivern.png Janna.png Jarvan IV.png Jax.png Jayce.png Jhin.png Jinx.png Kai'Sa.png Kalista.png Karma.png Karthus.png Kassadin.png Katarina.png Kayle.png Kayn.png Kennen.png Kha'Zix.png Kindred.png Kled.png Kog'Maw.png LeBlanc.png Lee Sin.png Leona.png Lillia.png Lissandra.png Lucian.png Lulu.png Lux.png Malphite.png Malzahar.png Maokai.png Master Yi.png Miss Fortune.png Mordekaiser.png Morgana.png Nami.png Nasus.png Nautilus.png Neeko.png Nidalee.png Nilah.png Nocturne.png Nunu.png Olaf.png Orianna.png Ornn.png Pantheon.png Poppy.png Pyke.png Qiyana.png Quinn.png Rakan.png Rammus.png Rek'Sai.png Rell.png Renata Glasc.png Renekton.png Rengar.png Riven.png Rumble.png Ryze.png Samira.png Sejuani.png Senna.png Seraphine.png Sett.png Shaco.png Shen.png Shyvana.png Singed.png Sion.png Sivir.png Skarner.png Sona.png Soraka.png Swain.png Sylas.png Syndra.png Tahm Kench.png Taliyah.png Talon.png Taric.png Teemo.png Thresh.png Tristana.png Trundle.png Tryndamere.png Twisted Fate.png Twitch.png Udyr.png Urgot.png Varus.png Vayne.png Veigar.png Vel'Koz.png Vex.png Vi.png Viego.png Viktor.png Vladimir.png Volibear.png Warwick.png Wukong.png Xayah.png Xerath.png Xin Zhao.png Yasuo.png Yone.png Yorick.png Yuumi.png Zac.png Zed.png Zeri.png Ziggs.png Zilean.png Zoe.png Zyra.png"

let arr = message.split('.png');

const image_arr = arr.map(x=> x.trim())
const mastery_arr_str = "3 6 4 2 3 5 4 4 5 5 3 4 5 2 5 5 5 6 4 3 7 5 7 6 5 5 5 4 5 6 4 4 6 5 4 5 5 4 5 5 4 3 3 6 4 6 6 5 4 7 6 6 5 3 4 3 3 4 7 4 6 7 2 5 4 5 6 5 3 6 7 7 5 5 4 4 5 4 7 4 5 6 6 5 2 5 4 5 5 3 5 7 4 3 5 6 5 3 3 4 3 6 4 4 4 4 5 7 4 4 5 5 5 5 4 5 5 4 7 5 4 5 5 6 4 3 5 6 6 5 3 5 5 5 3 7 6 5 5 4 7 3 5 3 5 5 4 5 7 4 6 2 3 5 3 4 4 5 3 7 3"
arr = mastery_arr_str.split(' ');

const mastery_arr = arr.map(x=> x.trim())


// The array
//console.log(image_arr)

//append images to dom




//click for number values


//save number values
//<div class="centered">Centered</div>

for(let i = 0; i < 161; i++) {
    const container = document.createElement("div");
    container.classList.add("container");

    const img = document.createElement("img");
    img.src = "./content/images/"+image_arr[i]+".png";
    img.classList.add("img-margin");

    
    const text = document.createElement("div");
    text.textContent=mastery_arr[i]
    text.classList.add("centered")


    container.appendChild(img)
    container.appendChild(text)
    //container.appendChild(text2)
    if (mastery_arr[i]<5)
        document.body.appendChild(container);
  }