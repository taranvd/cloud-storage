import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private reposiory: Repository<UserEntity>,
  ) {}

  async findByEmail(email: string) {
    return this.reposiory.findOneBy({ email });
  }

  async findById(id: number) {
    return this.reposiory.findOneBy({ id });
  }

  create(dto: CreateUserDto) {
    return this.reposiory.save(dto);
  }
}
