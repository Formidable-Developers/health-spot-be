import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user"

@Entity()
export class Pharmacy extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    name: string
    address: string
    phoneNumber: string
    email: string
    website?: string
    superUser: User
    operatingHours: string
}