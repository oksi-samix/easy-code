import chai from "chai";
import sinon from "sinon";
import {Person, getUsers} from './Person';

const { expect } = chai;

describe('Person', () => {
    let person;
     beforeEach(() => {
         person = new Person();
     });

    it('Person should set name in constructor', () => {
        const name = 'Jhon';
        const person = new Person();
        expect(person.name).to.equal(name)
    });

    it('Person should set data in this.creation', () => {
        const person = new Person();
        expect(person.creation).to.be.instanceof(Date)
    });

    it('Person should return night child if hour 23', () => {
        person.creation.setHours(23);
        expect(person.getCreation()).to.equal('night child')
    });
});

describe('users', () => {

    it('should call fetch', (done) => {
        const fakeFetch = sinon.stub(window, 'fetch');
        const fakeConsole = sinon.stub(console, 'log');
        fakeFetch.returns(Promise.resolve({
            json() { return 'test'}
        }))
        getUsers().then(() => {
            expect(fakeConsole.called).to.be.true;
            done();
        });
        expect(fakeFetch.called).to.be.true;
    });
});