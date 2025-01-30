import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNumber()
  invoice_id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsNumber()
  count: number;

  @Column()
  @IsNumber()
  unit_price: number;

  @Column()
  @IsNumber()
  total_price: number;

  @Column()
  @IsNumber()
  disCount: number;

  @Column()
  @IsString()
  status: string;
}
