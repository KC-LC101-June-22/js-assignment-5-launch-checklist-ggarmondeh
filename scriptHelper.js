// Write your helper functions here!







require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
  let div = document.getElementById("missionTarget");
  console.log(div.innerHTML)
  div.innerHTML =`<h2>Mission Destination</h2>
  
  <ol>
      <li>Name: ${name} </li>
      <li>Diameter: ${diameter} </li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance} </li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src="${imageUrl}">`
  
}

function validateInput(input) {
    if (input === ""){
        return "Empty";
    }  else if(isNaN(input)){
        return "Not a Number"
    } else if(isNaN(input) === false){
        return "Is a number"
    }
    // if (Number(input) === "" ){
    //     return "Empty"
    // } else if(isNaN(Number(input))){
    
    // return "Not a Number"
    // } else{
    //     return "Is a number"
    // }
    

    //     let form = document.querySelector("#formField")
    
//     let messages = []
//    if (pilotName.value ==='' || pilotName.value == null){
//     messages.push('Pilot name is required')  

   }

   

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus"); 
    let launchStatus = document.getElementById('launchStatus');
    let Fuelready = true;
    // const form = document.querySelector("#formField")

    // let validatedPilot = validateInput(pilot);
    // let validatedCoPilot = validateInput(copilot);
    // let validatedfuelLevel = validateInput(fuelLevel);
    // let validatedcargoLevel = validateInput(cargoLevel);



    // let pilotMessage = pilot + " Ready!"
    // let copilotMessage = copilot + "Ready";
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        window.alert("All Field are required");
    } else if( validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ){
        window.alert("Invalid Input");
    } else if(Number(fuelLevel) < 10000 && Number(cargoLevel) > 10000){
            list.style.visibility = 'visible';
            fuelStatus.innerHTML = 'Not enough fuel for launch';
            cargoStatus.innerHTML = 'Cargo is heavy for launch';
            launchStatus.innerHTML = 'Shuttle is not ready for launch';
            launchStatus.style.color = 'red';
            pilotStatus.innerHTML = `pilot ${pilot} is ready`;
            copilotStatus.innerHTML = `copilot ${copilot} is ready`
        } else if(Number(fuelLevel) < 10000 && Number(cargoLevel) <= 10000){
            list.style.visibility = 'visible';
            fuelStatus.innerHTML = 'Not enough fuel for launch';
            cargoStatus.innerHTML = 'Cargo is low for launch';
            launchStatus.innerHTML = 'Shuttle is not ready for launch';
            launchStatus.style.color = 'red';
            pilotStatus.innerHTML = `pilot ${pilot} is ready`;
            copilotStatus.innerHTML = `copilot ${copilot} is ready`
        }else if(Number(fuelLevel) >= 10000 && Number(cargoLevel) > 10000){
            list.style.visibility = 'visible';
             fuelStatus.innerHTML = 'Fuel level is high enough for Launch';
            cargoStatus.innerHTML = 'Cargo is heavy for launch';
             launchStatus.innerHTML = 'Shuttle is not ready for launch';
            launchStatus.style.color = 'red';
            pilotStatus.innerHTML = `pilot ${pilot} is ready`;
            copilotStatus.innerHTML = `copilot ${copilot} is ready`
        }else{
            list.style.visibility = 'visible';
            fuelStatus.innerHTML = 'Fuel level is high enough for Launch';
            cargoStatus.innerHTML = 'Cargo is low enough for launch';
            launchStatus.innerHTML = 'Shuttle is ready for launch';
            pilotStatus.innerHTML = `pilot ${pilot} is ready`;
            copilotStatus.innerHTML = `copilot ${copilot} is ready`
            launchStatus.style.color = 'green';

        } 
     
};


 
    

    list.innerHTML = `
        <ol>
            <li id="pilotStatus" data-testid="pilotStatus">${pilotMessage}</li>
            <li id="copilotStatus" data-testid="copilotStatus">${copilotMessage}</li>
            <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
            <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
        </ol>
    `


async function myFetch() {
    
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
    // let targets = document.getElementById('missionTarget');
        // let random = Math.round(Math.random() * data.length);
        // let target = data[random];

        // targets.innerHTML =
        //     `<h2>Mission Destination</h2>
        //     <ol>
        //        <li>Name: ${target.name}</li>
        //        <li>Diameter: ${target.diameter}</li>
        //        <li>Star: ${target.stat}</li>
        //        <li>Distance from Earth: ${target.distance}</li>
        //        <li>Number of Moons: ${target.moons}</li>
        //     </ol>
        //     <img src="${target.image}">`
});

    return planetsReturned;
}

function pickPlanet(planets) {
    let random = Math.round(Math.random() * planets.length);
        return planets[random]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
