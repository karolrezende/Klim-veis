import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./real_estate.entity";

@Entity('categories')
export class Categories{
    @PrimaryGeneratedColumn('increment')
    id: number
    
    @Column({unique: true, type: 'varchar', length: '45'})
    name: string

    @OneToMany(()=> RealEstate, (RealEstate)=> RealEstate.categories)
    realEstate: RealEstate[]
}