/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class Data {
  @PrimaryGeneratedColumn()
  // @ts-ignore
  dataId: number;

  @Column({ type: 'varchar', length: 256 })
  // @ts-ignore
  userName: string;

  @Column({ type: 'integer' })
  // @ts-ignore
  score: number;

  @CreateDateColumn()
  // @ts-ignore
  createdAt: string;

  @UpdateDateColumn()
  // @ts-ignore
  updatedAt: string;
}

export { Data };
