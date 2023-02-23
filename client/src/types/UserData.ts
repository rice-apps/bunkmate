export default interface UserData {
    id: number,
    name: string,
    email: string,
    phone: string,
    grad_year: string,
    res_college: string,
    major: string,
    minor: string,
    pronouns: string,
    gender: string,
    accommodations: string,
    on_campus: boolean,
    housing_pref: string,
    roommate_count: string,
    additional_room_info: string,
    personality_traits: [string],
    is_morning_person: boolean,
    room_temp_pref: string,
    bed_time_pref: string,
    wake_time_pref: string,
    room_usage: [string],
    outing_freq: string,
    relationship_pref: string,
    drinking_pref: string,
    smoking_pref: string,
    roommate_smoking_pref: string,
    roommate_gender_pref: string,
    has_overnight_guest: boolean,
    cleaning_freq: string,
    additional_prefs: string,
    is_snorer: boolean,
    additional_habit_info: string,
    pfp: string,
    new_user: boolean
}