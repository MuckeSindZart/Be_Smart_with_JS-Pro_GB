const App = {};

class User {
    #_name;

    constructor(name) {
        this.#_name = name;
    }

    getName() {
        return this.#_name;
    }
}

App.registerUser = (name, email, password) => {
    try {
        if (!name || !email || !password) {
            throw new Error("Data Input is not full ");
        }

        const user = new User(name);

        const userData = {
            name: user.getName(),
            email,
            password,
        };

        console.log("User successfully registered");
        console.log("userData", userData);
    } catch (error) {
        console.error("registered Error", error.message);
    } finally {
        console.log("End Registered");
    }
};

//----------------------------------------------------------------------------//

App.registerUser("bob", "mail", "1234");
App.registerUser("lisa", "", "4321");
