import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
    private boards = ['asdf'];

    getAllBoards() {
        return this.boards;
    }
}
