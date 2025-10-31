import { IsString, IsNotEmpty, IsOptional, Length, Matches } from 'class-validator';
export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  @Matches(/^[a-zA-Z\s]+$/)
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}