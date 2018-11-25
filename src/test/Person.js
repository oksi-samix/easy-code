export class Person {
    constructor(name = 'Jhon') {
        this.name = name;
        this.creation = new Date();
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
    getCreation() {
        const hours = this.creation.getHours();

        if (hours > 22 && hours < 24 || hours > 0 && hours <= 6) {
            return 'night child';
        }

        if (hours > 6 && hours < 11) { return 'morning child'; }

        if (hours >= 11 && hours < 19) { return 'day child'; }

        return 'evening child';
    }

}

export const getUsers = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return fetch(url)
        .then(data => data.json())
        .then(console.log)
        .catch(console.error);
};
