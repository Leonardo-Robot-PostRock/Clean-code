(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
    }

    class User extends Person {
        private lasteAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate);
            this.lasteAccess = new Date();
        }

        checkCredentials() {
            return true
        }
    }

    class UserSetting extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate)
        }
    }

    const userSetting = new UserSetting(
        'usr/home',
        '/home',
        'leonardo@gmail',
        'Admin',
        'Leornardo',
        'M',
        new Date('1994-06-22')
    )

    console.log({ userSetting });


})()