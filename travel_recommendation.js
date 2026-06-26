 
 const apiUrl="travel_recommendation_api.json"

 
function sterge(){
    const stergcautarea=document.getElementById("cauttext");
    stergcautarea.value="";

    const btn = document.getElementById("butonstergere");
    const cardsContainer = document.querySelector("#cardsContainer");
    
    btn.addEventListener("click", () => {
      cardsContainer.innerHTML = ""; // șterge toți child-ii
    });


}
  async function loadData(cecaut) {
    const res = await fetch("./travel_recommendation_api.json");
    const data = await res.json();
  
    for (const key in data) {
      const arr = data[key]; // countries/temples/beaches -> array
      if (Array.isArray(arr)) {
        arr.forEach((item,index) => {
          console.log(key,item);
          
           const cheie=String(key).includes(cecaut);
          if (cheie===true){  
            const container = document.getElementById("cardsContainer"); 
           
                if (String(key)!=="countries") 
                    {

                        const card = document.createElement("div");
                        card.className = "card";
                        card.id = `sectiune-${index}`; // evită să folosești mereu id-ul "sectiune" 
                   

                    const punimagine=String(item.imageUrl);                    
                    const img = document.createElement("img");
                    img.src = punimagine;
                    
                    /*puntext*/
                    
                    const paragrafpoza=document.createElement("h3");
                    paragrafpoza.textContent=String(item.name);
                    
                    
                        /*pun descriere*/
                    
                    const descpoza=document.createElement("p");
                    descpoza.textContent=String(item.description);
                    

                    card.appendChild(img);
                    card.appendChild(paragrafpoza);
                    card.appendChild(descpoza);

                    container.appendChild(card);

                        console.log(item.name);

                    }
                    else
                    {
                        
                        const tara=item.cities;
                                            
                        tara.forEach(function(oras){
                            const orasid=oras.id    
                            const card = document.createElement("div");
                            card.className = "card";
                            card.id = `sectiune-${index}-${orasid}`; // evită să folosești mereu id-ul "sectiune"

                            const punimagine=String(oras.imageUrl);                    
                    const img = document.createElement("img");
                    img.src = punimagine;
                    
                    /*puntext*/
                    
                    const paragrafpoza=document.createElement("h3");
                    paragrafpoza.textContent=String(oras.name);
                    
                    
                        /*pun descriere*/
                    
                    const descpoza=document.createElement("p");
                    descpoza.textContent=String(oras.description);
                    

                    card.appendChild(img);
                    card.appendChild(paragrafpoza);
                    card.appendChild(descpoza);

                    container.appendChild(card);

                        console.log(item.name);
                        console.log(punimagine);
                        })
                        
                    }
          }    
        });
    
      }
    }
  }
  
  loadData();
  const form = document.getElementById("formcautare");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("cauttext").value;
    const inputValue1=String(inputValue).toLowerCase()
    console.log(inputValue);
    if (inputValue1 !=""){
    loadData(inputValue1);
    }
  });

