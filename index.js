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
  constructor(beginningLocation, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
}
