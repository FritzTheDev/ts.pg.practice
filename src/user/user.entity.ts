import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToOne,
  JoinColumn,
  OneToMany
} from 'typeorm';
import { Address } from '../address/address.entity';
import { Post } from '../post/post.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @OneToOne(
    () => Address,
    (address: Address) => address.user,
    {
      cascade: true,
      eager: true
    }
  )
  @JoinColumn()
  public address: Address;

  @OneToMany(
    () => Post,
    (post: Post) => post.author
  )
  public posts: Post[];
}
