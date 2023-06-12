import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";
import { RealEstate } from "./real_estate.entity";

@Entity ('schedules')
export class Schedules {
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column({type: 'date'})
    date: string | Date
    @Column({type: 'time'})
    hour: string 

    @ManyToOne(()=> Users, (Users)=> Users.schedules)
    users: Users

    @ManyToOne(()=> RealEstate)
    realEstate: RealEstate
}