import chai from "chai";
import sinon from "sinon";
import {showMessage, getDay as getDayFunc, getAdultUsers, getRandomUsers, Product} from './main';
import {days, users} from './constans';

const {expect} = chai;

describe('showMessage foo calls alert with msg', () => {
    const fakeAlert = sinon.stub(window, 'alert');
    const msg = 'bla';
    it('should call alert', () => {
        showMessage(msg);
        expect(fakeAlert.called).to.be.true;

    });

    it('should call alert with msg', () => {
        showMessage(msg);
        expect(fakeAlert.args[0][0]).to.be.equal(msg);
    });
});

describe('test getDay function', () => {
    const currentDay = days[new Date().getDay()];
    it('should return  current day', () => {
        expect(getDayFunc()).to.be.equal(currentDay);
    });

});

describe('test getAdultUsers function', () => {
    const adultUser = [{age: 28}, {age: 45}, {age: 68}, {age: 38}, {age: 22}];
    it('should return  all adults users', () => {
        expect(getAdultUsers(users)).to.be.eql(adultUser);
    });

});

describe('test getRandomUsers function', () => {
    const user = [{age: 28}, {age: 45}, {age: 68}, {age: 38}, {age: 22}];
    const firstMiddle = [{age: 28}, {age: 45}, {age: 68}];
    const secondMiddle = [{age: 38}, {age: 22}];
    const random = sinon.stub(Math, 'random');
    it('should return  false if no users', () => {
        expect(getRandomUsers()).to.be.false;
    });

    it('should return  first middle of arr', () => {
        const maxNum = random.returns(0.9);
        expect(getRandomUsers(user)).to.be.eql(firstMiddle);
    });

    it('should return  second middle of arr', () => {
        const minNum = random.returns(0.1);
        expect(getRandomUsers(user)).to.be.eql(secondMiddle);
    });

});


describe('test Product class', () => {
    const value = 20;
    let product;
    beforeEach(() => {
        product = new Product();
    });
    it('should trow error', () => {
        expect(product.setPrice).to.throw('Price should be defined');
    });

    it('should set value', () => {
        product.setPrice(value)
        expect(product.value).to.be.equal(value);
    });
});