import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

export enum UserType {
    DEFAULT_USER,
    HEALTH_SPOT_SUPER_USER,
    HEALTH_SPOT_USER,
    HOSPITAL_SUPER_USER,
    HOSPITAL_USER,
    INSURANCE_COMPANY_SUPER_USER,
    INSURANCE_COMPANY_USER,
    PHARMACY_SUPER_USER,
    PHARMACY_USER,
}

export enum Gender {
    MALE,
    FEMALE,
    RATHER_NOT_SAY,
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: UserType

    @Column()
    firstName?: string

    @Column()
    lastName?: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    isActive: boolean

    @Column()
    joinedAt: Date
}

