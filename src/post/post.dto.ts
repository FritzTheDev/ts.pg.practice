import { IsString } from 'class-validator';

export default class PostDto {
  @IsString()
  public content: string;

  @IsString()
  public title: string;
}
