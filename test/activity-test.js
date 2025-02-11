import { expect } from "chai";
import Activity from "../src/Activity";
import UserRepository from "../src/UserRepository";
import activityData from "../src/data/activityData";
import userData from "../src/data/users"

describe("Activity Repository", () => {
  let activity = new Activity(activityData);
  let userRepo = new UserRepository(userData)

  it("should be a function", function () {
    expect(Activity).to.be.a("function");
  });

  it("should be a instance of Activity", function () {
    expect(activity).to.be.an.instanceOf(Activity);
  });

  it("should return error message if user does not exist", function () {
    expect(activity.findUser(52)).to.equal("User does not exist");
  });

  it("should have a method that returns miles walked in a specific day", function () {
    expect(activity.milesPerDay(1, "2019/06/15")).to.equal(1.79)
  });

  it("should have a method that returns how many active minutes in a given day", function () {
    expect(activity.activeMinutesDay(1, "2019/06/15")).to.equal(140)
  });

  it("should have a method that returns how many active minutes in a given week", function () {
    expect(activity.activeMinutesWeek(1, "2019/06/15")).to.equal(1198)
  })

  it("should have a method that returns boolean if a user reached their step goal for the day", function () {
    expect(activity.hitDailyStepGoal(1, "2019/06/15")).to.equal(false)
    expect(activity.hitDailyStepGoal(1, "2019/06/22")).to.equal(true)
  })

  it("should have a method that finds all days where step goal was exceeded", function () {
    expect(activity.allDaysStepGoal(1)).to.deep.equal(["2019/06/17", "2019/06/20", "2019/06/22"])
  })

  it("should have a method that finds step climbing record", function () {
    expect(activity.stairClimbRecord(1)).to.equal(36)
  })

  it("should have a method that returns average number of stairs climbed for all users on a specific day", function () {
    expect(activity.allUserAvgStairs("2019/06/15")).to.equal(20.8)
  })

  it("should have a method that returns average number of steps taken for all users on a specific day", function () {
    expect(activity.allUserAvgSteps("2019/06/15")).to.equal(6026.6)
  })

  it("should have a method that returns average number of minutes active on a specific", function () {
    expect(activity.allUserAvgminutes("2019/06/15")).to.equal(144.2)
  })

  it("should have a method that lists number of steps for latest day", function () {
    expect(activity.findLatestDaySteps(1)).to.equal(10289)
  })

  it("should have a method that lists number of flights for a week", function () {
    expect(activity.activityFlightsWeek(1)).to.deep.equal([
      36, 18, 33, 2,
      12,  6,  6
    ])
  })

  it("should have a method that lists number of steps for a week", function () {
    expect(activity.activityStepsForWeek(1)).to.deep.equal([
      6637, 14329,
      4419,  8429,
     14478,  6760,
     10289
   ])
  })

  it("should have a method that lists number of active mins for a week", function () {
    expect(activity.activityMinsForWeek(1)).to.deep.equal([
      175, 168, 165,
      275, 140, 135,
      119
    ])
  })

})
