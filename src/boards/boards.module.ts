import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
    controllers: [BoardsController],
    providers: [BoardsService, PrismaService],
    exports: [BoardsService]
})
export class BoardsModule {}
