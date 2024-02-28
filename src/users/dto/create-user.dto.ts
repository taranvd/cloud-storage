import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@gmail.com',
  })
  email: string;

  @ApiProperty({ default: 'John Johnson' })
  fullName: string;

  @ApiProperty({
    default: 'ewqf124ewdsa',
  })
  password: string;
}
