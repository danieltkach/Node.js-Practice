class UserProfile {
    #username;
    #email;
    #birthdate;

    set username(value) {
        if (value.trim() === '') throw new Error('Invalid username.');
        else this.#username = value;
    }
    set email(value) {
        if (!value.includes('@')) throw new Error('Invalid email.');
        else this.#email = value;
    }
    set birthdate(value) {
        const split = value.split('-');
        const hasDashes = value.charAt(4) === '-' && value.charAt(7) === '-';
        const isValid =
            split[0].length === 4 &&
            split[1].length === 2 &&
            split[2].length === 2 &&
            hasDashes;

        if (!isValid) throw new Error('Invalid birthdate.');
        else this.#birthdate = value;
    }

    get username() {
        return this.#username;
    }
    get email() {
        return this.#email;
    }
    get birthdate() {
        return this.#birthdate;
    }
}