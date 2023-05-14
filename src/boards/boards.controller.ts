import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { board } from '@prisma/client';
import { BoardStatus } from './board-status.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get('/:id')
    async getBoardById(@Param('id', ParseIntPipe) id: number): Promise<board> {
        return this.boardsService.getBoardById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createUser(@Body() createBoardDto: CreateBoardDto): Promise<board> {
        return this.boardsService.createBoard(createBoardDto);
    }

    // @Get('/')
    // getAllBoard(): Board[] {
    //     return this.boardsService.getAllBoards();
    // }

    // // @Post()
    // // createBoard(
    // //     @Body('title') title: string,
    // //     @Body('description') description: string,
    // // ): Board { // @Body() Body 하면 한번에
    // //     return this.boardsService.createBoard(title, description);
    // // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(@Body() CreateBoardDto: CreateBoardDto): Board {
    //     return this.boardsService.createBoard(CreateBoardDto);
    // }

    // @Get('/:id')
    // getBoardById(@Param('id') id: string): Board{ // param 다 가져올 때는 @Param() params: string[]
    //     return this.boardsService.getBoardById(id)
    // }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void {
    //     this.boardsService.deleteBoard(id);
    // }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus
    // ){
    //     return this.boardsService.updateBoardStatus(id, status)
    // }

}
