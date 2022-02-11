class HydrationRepository {
  constructor(hydrationInfo) {
    this.hydrationData = hydrationInfo;
  }
  avgPerDayOz(userId) {
    const findUser = this.hydrationData.filter(id => id.userID === userId);
    const totalOz = findUser.map(userOz => userOz.numOunces).reduce((previousValue, currentValue) => previousValue + currentValue);
    return Math.round(totalOz/findUser.length);
  }

  specificDayOz(userId, date) {
      const findDate = this.hydrationData.find(user => {
        if (user.date === date && user.userID === userId) {
          return user.numOunces;
        }});

      return findDate.numOunces;
    }
    //
    // const filteredData = this.hydrationData.filter(user => user.userID === userId)
    // const findDate = filteredData.find(user => user.date === date)
    // // return findDate
    // return findDate.numOunces;


  eachDayWeek0z(userId, startDate, endDate) {
    const findUser = this.hydrationData.filter(id => id.userID === userId);
    const dayOne = findUser.find(day => day.date === startDate)
    const daySeven = findUser.find(day => day.date === endDate)
    let i = findUser.indexOf(dayOne)
    let j = findUser.indexOf(daySeven)
    let weekOz =[];
    for(i; i <= j; i++) {
      weekOz.push(findUser[i])
    }
    return weekOz.map(oz => oz.numOunces)
  }
}

export default HydrationRepository;
