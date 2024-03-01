"use strict";

type UserType = {
  name: string;
  age: number;
  nickName: string;
  password: string;
  dateCreated: string;
  id: string;
};

type NoDisplayType = "dateCreated" | "id";

type CreateUserType = Omit<UserType, NoDisplayType>;

type UserInfo = Omit<UserType, "password">;

// 10. Sukurti naują user index.ts faile. panaudoti getterius, setterius. Pabandyt displayint userį.

// OOP in TS

export class User {
  constructor({ name, age, nickName, password }: CreateUserType) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
    this.password = password;
    this.id = this.generateDate();
    this.dateCreated = this.generateDate();
  }

  private name: string;
  private age: number;
  private nickName: string;
  private password: string;
  private dateCreated: string = this.generateDate();
  private id: string = this.generateId();

  private generateId() {
    return Math.random().toString(36).substring(2, 15);
  }

  private generateDate() {
    return new Date().toLocaleDateString("lt-LT");
  }

  getName() {
    return this.name;
  }
  setName(name: UserType["name"]) {
    if (!name) {
      return;
    }
    this.name = name;
  }

  private getAge() {
    return this.age;
  }

  private setAge(age: UserInfo["age"]) {
    if (!age) {
      return;
    }
    this.age = age;
  }

  private getNickName() {
    return this.nickName;
  }

  getUserInfo(): object {
    const userInfo: UserInfo = {
      name: this.name,
      age: this.age,
      nickName: this.nickName,
      dateCreated: this.dateCreated,
      id: this.id,
    };

    return userInfo;
  }
}
