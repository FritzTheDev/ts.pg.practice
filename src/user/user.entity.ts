import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { Address } from '../address/address.entity';

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
    (address: Address) => address.user
  )
  @JoinColumn()
  public address: Address;
}
