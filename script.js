// Write your JavaScript code here!
// const {formSubmission} = require("./scriptHelper")

// const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {



   let listedPlanets;
  
   //    Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse =  myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
        let selectedPlanet = pickPlanet(listedPlanets);
        console.log(selectedPlanet)
        addDestinationInfo(document,selectedPlanet.name,selectedPlanet.diameter,selectedPlanet.star,selectedPlanet.distance,selectedPlanet.moon,selectedPlanet.image);
   });
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
    let faultyItems = document.getElementById("faultyItems")
    let list = document.getElementById("faultyItems")
    list.style.visibility = "hidden"
    let form = document.querySelector('form')


    form.addEventListener('submit',function(e){
   
            e.preventDefault()
            let pilot = document.querySelector("input[name=pilotName]").value;
            let copilot =document.querySelector("input[name=copilotName]").value;
            let fuel = document.querySelector("input[name=fuelLevel]").value;
            let cargo = document.querySelector("input[name=cargoMass]").value;
            
    
        
     formSubmission(document, list, pilot, copilot, fuel, cargo)
        
    });
});