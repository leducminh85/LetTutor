class User {
    constructor(id, name, avatar, country, phone, email, birthday, level, learnTopic) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.birthday = birthday;
        this.level = level;
        this.learnTopic = learnTopic
    }

    setName(name) {
        this.name = name;
    }

    setAvatar(avatar) {
        this.avatar = avatar;
    }

    setCountry(country) {
        this.country = country;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    setEmail(email) {
        this.email = email;
    }

    setBirthday(birthday) {
        this.birthday = birthday;
    }

    setLevel(level) {
        this.level = level;
    }

    setLearnTopic(learnTopic) {
        this.learnTopic = learnTopic;
    }
}
export default User