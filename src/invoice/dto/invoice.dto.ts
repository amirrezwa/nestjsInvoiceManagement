import { PartialType } from '@nestjs/swagger';

export class CreateInvoiceDto {
  invoice_id: number;
  name: string;
  count: number;
  unit_price: number;
  total_price: number;
  disCount: number;
  status: string;
}

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {}
