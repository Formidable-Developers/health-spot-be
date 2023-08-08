import { Pharmacy } from "./pharmacy"

enum Category {
    Drug,
    Device,
}

enum Currency {
    NGN = 'NGN',
    USD = 'USD'
}

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    name: string
    pharmacy: Pharmacy // TODO: Foreign Key relationship
    unitPrice: number
    quantityAvailable: number
    outOfStock: boolean
    salesCurrency: Currency
    categories: Category[]
}