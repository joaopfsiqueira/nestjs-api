import { IsString, IsOptional, Length, Matches } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  @Length(3, 100)
  @Matches(/^[a-zA-Z\s]+$/)
  name: string;

  @IsString()
  @IsOptional()
  @Length(3, 100)
  description: string;
}