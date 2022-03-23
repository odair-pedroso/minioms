import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table
export class Customer extends Model<Customer>{

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING(11),
    allowNull: false,
  })
  cpf: string;
  @Column({
    type: DataType.STRING(14),
    allowNull: false,
  })
  cnpj: string;
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  email: string;
  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  phone: string;
}