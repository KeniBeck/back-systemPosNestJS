import { Module } from '@nestjs/common';
import { InitModule } from './init/init.module';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [InitModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
