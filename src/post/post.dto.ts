import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  public content: string;

  @IsString()
  public title: string;
}
