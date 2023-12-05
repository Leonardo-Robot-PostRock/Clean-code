(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({
            name,
            gender,
            birthdate 
        }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate
        }
    }

    interface userProps {
        birthdate: Date,
        email: string,
        gender: Gender,
        name: string,
        role: string,
    }

    class User extends Person {
        public email: string;
        public role: string;
        // name: string;
        // gender: Gender,
        // birthdate: Date,

        public lastAccess: Date;

        constructor({
            email,
            role,
            name,
            gender,
            birthdate,
        }: userProps) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingProps {
        workingDirectory: string,
        lastOpenFolder: string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date
    }


    class UserSettings extends User {
        public workingDirectory;
        public lastOpenFolder;
        constructor({ 
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate, 
        }: UserSettingProps) {
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    }
    );

    console.log({ userSettings });


})();