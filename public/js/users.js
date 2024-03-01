"use strict";
// 10. Sukurti naują user index.ts faile. panaudoti getterius, setterius. Pabandyt displayint userį.
// OOP in TS
export class User {
    constructor({ name, age, nickName, password }) {
        this.dateCreated = this.generateDate();
        this.id = this.generateId();
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.password = password;
        this.id = this.generateDate();
        this.dateCreated = this.generateDate();
    }
    generateId() {
        return Math.random().toString(36).substring(2, 15);
    }
    generateDate() {
        return new Date().toLocaleDateString("lt-LT");
    }
    getName() {
        return this.name;
    }
    setName(name) {
        if (!name) {
            return;
        }
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        if (!age) {
            return;
        }
        this.age = age;
    }
    getNickName() {
        return this.nickName;
    }
    getUserInfo() {
        const userInfo = {
            name: this.name,
            age: this.age,
            nickName: this.nickName,
            dateCreated: this.dateCreated,
            id: this.id,
        };
        return userInfo;
    }
}
