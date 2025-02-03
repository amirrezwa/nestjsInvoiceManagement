import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceService } from './invoice.service';
import { PrismaService } from '../prismaDB/prisma.service';

describe('InvoiceService', () => {
  let service: InvoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoiceService, PrismaService],
    }).compile();

    service = module.get<InvoiceService>(InvoiceService);
  });

  it('should create an invoice', async () => {
    const invoiceData = {
      invoice_id: 1,
      name: 'Test Invoice',
      count: 2,
      unit_price: 100,
      total_price: 200,
      disCount: 10,
      status: 'pending',
    };

    const invoice = await service.create(invoiceData);
    expect(invoice).toHaveProperty('id');
    expect(invoice.name).toBe('Test Invoice');
  });
});
