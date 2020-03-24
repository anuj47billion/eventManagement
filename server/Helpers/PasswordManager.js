import Encrypt from './Encrypt';

class PasswordManager {
    constructor() {
        this.inputedPassword = null;
        this.salt = null;
        this.existingPassword = null;
        this.txtPassword = null;
    }

    verifyPassword() {
        const self = this;
        const encrypt = new Encrypt(self.inputedPassword);
        return encrypt.verifyPassword(self.salt, self.existingPassword);
    }

    createPasswordHash() {
        const self = this;
        const encrypt = new Encrypt(self.txtPassword);
        const passwordStr = encrypt.hashPassword();
        const hashedPassword = passwordStr.passwordHash;
        const salt = passwordStr.salt;
        const passwordObject = {
            password: hashedPassword,
            salt
        };
        return passwordObject;
    }
}

export default PasswordManager