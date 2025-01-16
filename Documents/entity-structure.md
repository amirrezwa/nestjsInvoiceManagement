import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

   @Column()
   national_id: number;

   @Column()
   mobile: number;

   @Column()
   created_at: string;

   @Column()
   status: boolean;

   @Column()
   description: string;

   @Column()
   price: number;
