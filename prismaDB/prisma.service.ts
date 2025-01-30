import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  update(arg0: { where: { id: number; }; data: import("../src/invoice/dto/invoice.dto").UpdateInvoiceDto; }) {
    throw new Error('Method not implemented.');
  }
  constructor() {
    super();
  }
}
