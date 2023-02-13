import bcrypt from "bcrypt";

class User {
    constructor({ email, password }) {
        this.email = email;
        this.password = password;
    }

    async comparePassword(password) {
        return bcrypt.compare(password, this.password);
    }
}

export default User;
