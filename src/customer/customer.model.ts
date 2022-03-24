import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table
export class Customer extends Model<Customer>{

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  @ApiProperty({
    example: 'Odair Pedroso',
    description: 'Nome do cliente',
  })
  name: string;
  @Column({
    type: DataType.STRING(11),
    allowNull: false,
  })
  @ApiProperty({
    example: '99999999999',
    description: 'Número de CPF do cliente',
  })
  cpf: string;
  @Column({
    type: DataType.STRING(14),
    allowNull: false,
  })
  @ApiProperty({
    example: '11111111111111',
    description: 'Número do CNPJ do cliente',
  })
  cnpj?: string;
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  @ApiProperty({
    example: 'example@gmail.com',
    description: 'E-mail do cliente',
  })
  email: string;
  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  @ApiProperty({
    example: '1199999-9999',
    description: 'Número do telefone do cliente',
  })
  phone: string;
}