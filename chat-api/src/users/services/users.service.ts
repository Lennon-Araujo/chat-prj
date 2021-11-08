import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './../entities/user.entity'

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private usersRepo: Repository<User>,
    ) {}

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: number) {
    return this.usersRepo.findOne(id);
  }

  create(body: any) {
    const newUser = new User();
    newUser.username = body.username;
    newUser.password = body.password;
    newUser.email = body.email;
    // const newUser = this.usersRepo.create(body);
    return this.usersRepo.save(newUser);
  }

  async update(id: number, body: any) {
    const user = await this.usersRepo.findOne(id);
    this.usersRepo.merge(user, body);
    return this.usersRepo.save(user);
  }

  async remove(id: number) {
    await this.usersRepo.delete(id);
    return true;
  }
}
