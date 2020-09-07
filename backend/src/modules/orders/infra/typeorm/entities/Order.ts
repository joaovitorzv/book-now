import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customer_id: string;

  @OneToOne(() => User, { eager: true })
  @JoinColumn({ name: 'customer_id' })
  customer: User;

  @Column({ type: 'text', array: true })
  books_ordered: string[];

  @Column({ type: 'bigint' })
  order_total: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Order;