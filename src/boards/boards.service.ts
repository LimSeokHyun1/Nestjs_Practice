import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import {v1 as uuid} from 'uuid'
import { CreateBoardDto } from './dto/create-board.dto';
import { board } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BoardsService {
    constructor(private prisma: PrismaService){}
 
    async getBoardById(id: number): Promise<board> {
        const board =  this.prisma.board.findUnique({
            where: {
                id: id,
            },
        });

        if (!board) throw new NotFoundException(`User with ID ${id} not found`);
        return board;
    }

    async createBoard(createBoardDto: CreateBoardDto): Promise<CreateBoardDto> {
        return this.prisma.board.create({
            data: createBoardDto
        });
    }
    // private boards: Board[] = [];

    // getAllBoards(): Board[] {
    //     return this.boards;
    // }

    // // createBoard(title: string, description: string){
    // //     const board: Board ={
    // //         id: uuid(), // unique한 값
    // //         title: title,
    // //         description,  // 동일 이름이면 생략 가능
    // //         status: BoardStatus.PUBLIC
    // //     }
    // //     this.boards.push(board);
    // //     return board;
    // // }

    // createBoard(CreateBoardDto: CreateBoardDto){
    //     const {title, description} = CreateBoardDto;

    //     const board: Board ={
    //         id: uuid(), // unique한 값
    //         title: title,
    //         description,  // 동일 이름이면 생략 가능
    //         status: BoardStatus.PUBLIC
    //     }
    //     this.boards.push(board);
    //     return board;
    // }

    // getBoardById(id: string): Board {
    //     const found = this.boards.find((board) => board.id === id);
        
    //     if(!found){
    //         throw new NotFoundException('Cannot find Board with id' + id);
    //     }

    //     return found
    // }

    // deleteBoard(id: string): void{
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board) => board.id !== found.id);
    // }

    // updateBoardStatus(id:string, status: BoardStatus): Board{
    //     const board = this.getBoardById(id);
    //     board.status = status
    //     return board
    // }
}
