"use strict";
class AdvancedUser {
    constructor(firstName, lastName) {
        this.data = { firstName, lastName };
        this.methods = {
            fullName: () => `${firstName} ${lastName}`,
        };
    }
}
const user1 = new AdvancedUser("Md. Mehedi", "Hasan");
console.log(user1.methods.fullName());
