import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    status: string;
}