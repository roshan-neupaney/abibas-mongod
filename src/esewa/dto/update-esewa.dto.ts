import { PartialType } from '@nestjs/swagger';
import { CreateEsewaDto } from './create-order.dto';

export class UpdateEsewaDto extends PartialType(CreateEsewaDto) {}
