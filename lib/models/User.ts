// Simple User model without Mongoose pre-hooks
export interface IUser {
  _id?: string;
  email: string;
  password: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  _id?: string;
  email: string;
  password: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(data: IUser) {
    this._id = data._id;
    this.email = data.email;
    this.password = data.password;
    this.name = data.name;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  async save() {
    // This will be implemented by the database layer
    return this;
  }

  toJSON() {
    const { password, ...rest } = this;
    return rest;
  }
}

export default User;
