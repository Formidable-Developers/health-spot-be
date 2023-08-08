import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user"

enum MedicalDepartment {
    CARDIOLOGY,
    DERMATOLOGY,
    ENDOCRINOLOGY,
    GASTROENTEROLOGY,
    HEMATOLOGY,
    NEPHROLOGY,
    NEUROLOGY,
    OBSTETRICS,
    GYNECOLOGY,
    ONCOLOGY,
    OPHTHALMOLOGY,
    ORTHOPEDICS,
    OTOLARYNGOLOGY,
    PEDIATRICS,
    PSYCHIATRY,
    PULMONOLOGY,
    RHEUMATOLOGY,
    UROLOGY,
    INFECTIOUS_DISEASES,
    ANESTHESIOLOGY,
    EMERGENCY_MEDICINE,
    RADIOLOGY,
    GENERAL_SURVEY
}

@Entity()
export class Hospital extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    name: string
    address: string
    phoneNumber: string
    email: string
    website?: string
    medicalDepartments: MedicalDepartment[]
    superUser: User
}