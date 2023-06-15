import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Schedules } from "./schedules.entity";
import { Address } from "./address.entity";
import { Categories } from "./categories.entity";

@Entity ('real_estate')
export class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column({type: 'boolean', default: 'false'})
    sold: boolean
    @Column({type: 'decimal', precision:10, scale:2, default: 0})
    value: number | string
    @Column({type: 'integer'})
    size: number
    @CreateDateColumn()
    createdAt: Date | string
    @UpdateDateColumn()
    updatedAt: Date | string
    @OneToMany(()=> Schedules, (Schedules)=> Schedules.realEstate)
    schedules: Schedules[]

    @OneToOne(()=> Address)
    @JoinColumn()
    adress: Address

    @ManyToOne(()=> Categories)
    @JoinColumn()
    categories:Categories
}