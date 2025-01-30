// import { Entity } from 'typeorm';

// @Entity('user')
// export class Users {
//   // @PrimaryGeneratedColumn()
//   // id: number;
//   // @Column()
//   // first_name: string;f
//   // @Column()
//   // last_name: string;
//   //   @Column()
//   // national_id: number;
//   //   @Column()
//   // mobile: number;
//   //   @Column()
//   // created_at: string;
//   //   @Column()
//   // status: boolean;
//   //   @Column()
//   // description: string;
//   //   @Column()
//   // price: number;
//   //   erDiagram
//   //     User {
//   //         int id PK "Primary Key"
//   //         string name
//   //         string email
//   //         number nationalId
//   //         number mobile
//   //         boolean status
//   //     }
//   //     Order {
//   //         int id PK "Primary Key"
//   //         int user_id FK "Foreign Key"
//   //         string order_date
//   //         float total_amount
//   //     }
//   //     Product {
//   //         int id PK "Primary Key"
//   //         string name
//   //         string description
//   //         float price
//   //     }
//   //     OrderItem {
//   //         int id PK "Primary Key"
//   //         int order_id FK "Foreign Key"
//   //         int product_id FK "Foreign Key"
//   //         int quantity
//   //         float subtotal
//   //     }
//   //     User ||--o| Order : "places"
//   //     Order ||--o| OrderItem : "contains"
//   //     Product ||--o| OrderItem : "is part of"
// }
