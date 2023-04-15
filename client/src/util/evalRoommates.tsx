import UserData from "../types/UserData";

/**
 * Returns the top n=3 recipes remaining after sorting by similarity to saved recipes
 */

export default function getRecommendedUsers(activeUser: UserData, allUsers: UserData[]): UserData[] {
    const possibleMatches = allUsers.filter(otherUser => isMatchPossible(activeUser, otherUser));

    return possibleMatches.sort((userA, userB) => 
        evalMatch(activeUser, userA) - evalMatch(activeUser, userB));
}

/**
 * Returns whether or not a match is possible between users A and B. Hopefully
 * is symmetric.
 */
function isMatchPossible(userA: UserData, userB: UserData): boolean {
    // Ensure users are different lol
    if (userA == userB)
        return false

    // Ensure campusness matches
    if (userA.on_campus != userB.on_campus)
        return false

    // Ensure resCollege matches if both are on campus
    if ((userA.on_campus && userB.on_campus) && (userA.res_college != userB.res_college))
        return false

    // // Ensure roommates' gender and gender preferences mutually match
    // if ((userA.roommate_gender_pref != userB.gender && userA.roommate_gender_pref != "Either") || 
    //     (userB.roommate_gender_pref != userA.gender && userB.roommate_gender_pref != "Either"))
    //     return false
    
    return true
}
   
function evalMatch(userA: UserData, userB: UserData): number{
    let score = 0.0

    // How similar are graduation years
    score += 4 - Math.min(4, Math.abs(((+userA.grad_year) - (+userB.grad_year))))
    
    // Overnight guest preferences
    score += (userA.has_overnight_guest == userB.has_overnight_guest) ? 1 : 0

    // Room temp pref
    var userA_temps = userA.room_temp_pref.split("-", 2).map(x => +x); 
    var userB_temps = userB.room_temp_pref.split("-", 2).map(x => +x); 
    score += (userA_temps[1] >= userB_temps[0] && userA_temps[0] <= userB_temps[1]) ? 1 : 0

    // How is this stored ??
    //score += (userA.presence == ) 

    // Cleaning frequency
    score += (5.0 + (+userA.cleaning_freq - +userB.cleaning_freq)) / 5.0 
    
    // Hopefully these are all stored consistently?
    score += (userA.drinking_pref == userB.drinking_pref) ? 1 : 0
    score += (userA.is_snorer == userB.is_snorer) ? 1 : 0
    score += (userA.major.toLowerCase() == userB.major.toLowerCase()) ? 1 : 0

    // Get number of overlapping traits (may be assymmetric)
    for (let trait in userA.personality_traits)
        score += (userB.personality_traits.includes(trait) ? 0.5 : 0) / userA.personality_traits.length 

    //console.log(userA.name, userB.name, score)
    return score;
}