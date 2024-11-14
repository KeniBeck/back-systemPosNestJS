import { Injectable } from '@nestjs/common';
import { CreateInitDto } from './dto/create-init.dto';
import { UpdateInitDto } from './dto/update-init.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InitService {
  constructor(private prisma : PrismaService){}

  create(createInitDto: CreateInitDto) {
    return 'This action adds a new init';
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} init`;
  }

  update(id: number, updateInitDto: UpdateInitDto) {
    return `This action updates a #${id} init`;
  }

  remove(id: number) {
    return `This action removes a #${id} init`;
  }
}
