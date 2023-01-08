class UserEdit {
    constructor(name, avatar, country, phone, email, birthday, level) {
        this.name = name;
        this.avatar = avatar;
        this.country = country;
        this.phone = phone;
        this.birthday = birthday;
        this.level = level;
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

    setBirthday(birthday) {
        this.birthday = birthday;
    }

    setLevel(level) {
        this.level = level;
    }
}
export default UserEdit