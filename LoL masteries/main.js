async function getChampNames() {
  api_url =
    "https://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json";

  const responsec = await fetch(api_url);
  // Parsing it to JSON format
  const datac = await responsec.json();

  let champ_Arr = {};
  //console.log(datac)
  for (let [key, value] of Object.entries(datac.data)) {
    champ_Arr[value["key"]] = value["name"];
  }

  API_KEY = " :) "
  summoner_id = " :) "

  const response = await fetch(
    "https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + summoner_id + "?api_key=" + API_KEY
  );
  
  const data = await response.json();

//console.log(data)

  let mast_Arr = {};
  for (x of data) {
    ix = x["championId"];
    name = champ_Arr[ix];

    mast_Arr[name] = x["championLevel"];
  }

  console.log(mast_Arr);

  mast_Arr = Object.keys(mast_Arr)
    .sort()
    .reduce((obj, key) => {
      obj[key] = mast_Arr[key];
      return obj;
    }, {});


    //tokensEarned

    let token_Arr = {};
    for (x of data) {
      ix = x["championId"];
      name2 = champ_Arr[ix];
  
      token_Arr[name2] = x["tokensEarned"];
    }
  
  
  
    token_Arr = Object.keys(token_Arr)
      .sort()
      .reduce((obj, key) => {
        obj[key] = token_Arr[key];
        return obj;
      }, {});  


      //console.log(token_Arr);




  for (let [key, value] of Object.entries(mast_Arr)) {
    const container = document.createElement("div");
    container.classList.add("container");

    const img = document.createElement("img");
    img.src = "./content/images/" + key + ".png";
    img.classList.add("img-margin");

    const text = document.createElement("div");
    text.textContent = value;
    text.classList.add("centered");
    
    tokenval=token_Arr[key]
    if (tokenval===1)
    {
      text.classList.add("token1");
    }
    else if (tokenval===2)
    {
      text.classList.add("token2");
    }
    else if (tokenval===3)
    {
      text.classList.add("token3");
    }


    container.appendChild(img);
    container.appendChild(text);

    if (value>4 && value<7)
    document.body.appendChild(container);
  }
}

getChampNames();