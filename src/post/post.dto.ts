import { IsString } from 'class-validator';

export class PostDto {
  @IsString()
  public content: string;

  @IsString()
  public title: string;
}
