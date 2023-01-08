class Teacher {
    constructor(id, name, avatar, country, phone, video, bio, education, experience, profession, targetStudent,
        interests, languages, specialties, rating, favourite, feedbacks) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.country = country;
        this.phone = phone;
        this.video = video;
        this.bio = bio;
        this.education = education;
        this.experience = experience;
        this.profession = profession;
        this.targetStudent = targetStudent;
        this.interests = interests;
        this.languages = languages;
        this.specialties = specialties;
        this.rating = rating;
        this.favourite = favourite;
        this.feedbacks=feedbacks;
    }

    setFavourite(favourite){
        this.favourite = favourite

    }
}

export default Teacher