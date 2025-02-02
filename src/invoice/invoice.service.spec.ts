import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceService } from './invoice.service';
import { PrismaService } from '../prismaDB/prisma.service';

describe('InvoiceService', () => {
  let service: InvoiceService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoiceService, PrismaService],
    }).compile();

    service = module.get<InvoiceService>(InvoiceService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should create an invoice', async () => {
    const mockInvoice = {
      id: 1,
      invoice_id: 1,
      name: 'amirreza',
      count: 156,
      unit_price: 15,
      total_price: 156,
      disCount: 789,
      status: 'pending',
    };
    jest.spyOn(prisma.invoice, 'create').mockResolvedValue(mockInvoice);

    const invoice = await service.create({
      total_price: 1000,
      invoice_id: 0,
      name: '',
      count: 0,
      unit_price: 0,
      disCount: 0,
      status: '',
    });
    expect(invoice).toEqual(mockInvoice);
  });
});
