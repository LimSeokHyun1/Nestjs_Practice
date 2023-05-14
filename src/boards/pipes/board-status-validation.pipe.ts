import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";

export class BoardStatusValidationPipe implements PipeTransform{

    readonly StatusOptions = [
        BoardStatus.PUBLIC,
        BoardStatus.PRIVATE
    ]

    transform(value: any, metadata: ArgumentMetadata){
        console.log('value', value);
        console.log('metadata', metadata);

        value = value.toUpperCase();
        if(!this.isStatusValid(value)){
            throw new BadRequestException( value + ' is not in the status options')
        }

        return value;
    }
    isStatusValid(status: any) {
        const index = this.StatusOptions.indexOf(status);

        return index !== -1
    }
}