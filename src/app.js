//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon]
}


// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length != 0) {
    return {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2],
    }
  } else {
    return null
  }
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let playerDebut =[]
  players.forEach(e => {
    if(e.debut == year){
      playerDebut.push(e)
    }
  });
  return playerDebut
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let playerPosition = []
  players.forEach(e => {
    if(e.position == position){
      playerPosition.push(e)
    }
  })
  return playerPosition
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let playerAward = []
  players.forEach(e => {
    // if(e.awards == )
    e.awards.forEach(award => {
      if(award.name == awardName){
        playerAward.push(e)
      }
    })
  })
  return playerAward
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  let playerAwardxTime = []
  players.forEach((e)=>{
    let award_count = 0
    e.awards.forEach(award =>{
      if (award.name == awardName) {
        award_count++
      }
    })
    if (award_count==noOfTimes) {
      playerAwardxTime.push(e)
    }
  })
  return playerAwardxTime
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  let playerAwardCountry = []
  players.forEach(e =>{
    let isCountry = false
    let hasAward = false
    if (e.country == country) {
      isCountry = true
    }
    e.awards.forEach(award =>{
      if (award.name == awardName) {
        hasAward = true
      }
    })
    if (isCountry && hasAward) {
      playerAwardCountry.push(e)
    }
  })
  return playerAwardCountry
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let eligiblePlayer = []
  players.forEach(e => {
    if (e.age < age && e.team == team && e.awards.length >=noOfAwards) {
      eligiblePlayer.push(e)
    }
  })
  return eligiblePlayer
}

//Progression 9 - Sort players in descending order of their age

function SortByAge() {
  players.sort((a,b)=>{
    return b.age - a.age
  })
  return players
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team) {
  let playerFiltered = players.filter(e => e.team == team)
  playerFiltered.sort((a,b)=> b.awards.length - a.awards.length)
  return playerFiltered
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  let eligiblePlayer = players.filter(e =>{
    return e.awards.filter(ele => ele.name == awardName).length == noOfTimes && e.country == country
  })

  eligiblePlayer.sort((a,b)=>{
    let firstName = a.name.toUpperCase()
    let secondName = b.name.toUpperCase()

    if (firstName>secondName) {
      return 1
    }
    return 0
  })
  return eligiblePlayer
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age) {
  oldPlayers = players.filter(e => e.age > age)
  oldPlayers.sort((a,b)=>{
    let firstName = a.name.toUpperCase()
    let secondName = b.name.toUpperCase()

    if (firstName > secondName) {
      return 1
    }
    return 0
  })
  return oldPlayers
}
