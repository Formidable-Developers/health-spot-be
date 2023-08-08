import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class InsuranceCompany extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    name: string
    address: string
    phoneNumber: string
    email: string
    website: string
    ceo: string
}