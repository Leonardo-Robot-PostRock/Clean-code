(() => {
    //No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    class Person {
        constructor(name: string, gender: Gender, birthDate: Date) {}
    }

    const newPerson = new Person('Leonardo', 'M', new Date('1994-06-22'))
    console.log({ newPerson });

})();