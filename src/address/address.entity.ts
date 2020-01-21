import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public street: string;

  @Column()
  public city: string;

  @Column()
  public country: string;

  @OneToOne(
    () => User,
    (user: User) => user.address
  )
  public user: User;
}
