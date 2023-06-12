import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Schedules } from "./schedules.entity";

@Entity('users')
export class Users {
    
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column({type: 'varchar', length: '45'})
    name: string
    @Column({type:'varchar', length:'45', unique: true})
    email: string
    @Column({type: 'boolean', default: false})
    admin: boolean
    @Column({type: 'varchar', length: 120})
    password: string
    @CreateDateColumn()
    createdAt: string | Date
    @UpdateDateColumn()
    updatedAt: string | Date
    @DeleteDateColumn({nullable: true})
    deletedAt?: string | Date | null | undefined

    @OneToMany(()=> Schedules, (Schedules)=> Schedules.users)
    schedules: Schedules[]
}