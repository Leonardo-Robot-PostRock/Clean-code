(() => {

    // No aplicando el principio de responsabilidad única
    // Priorizar la composición frente la herencia

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

    interface UserProps {
        email: string,
        role: string,
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({
            email,
            role,
        }: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string,
        lastOpenFolder: string,
    }

    class Settings {
        public workingDirectory;
        public lastOpenFolder;
        constructor({
            workingDirectory,
            lastOpenFolder,

        }: SettingsProps) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;
        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate
        }: UserSettingProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
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