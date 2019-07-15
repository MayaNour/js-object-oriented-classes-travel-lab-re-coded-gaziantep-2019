class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year){
    let yearsExperience = this.startDate.getFullYear();
    
    return year - yearsExperience;
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled(){
    let v = this.endingLocation.vertical - this.beginningLocation.vertical;
    
    let h = eastWest.indexOf()
  }
}
