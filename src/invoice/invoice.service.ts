import { HttpException, Injectable } from '@nestjs/common';
import { CreateInvoiceDto, UpdateInvoiceDto } from './dto/invoice.dto';
import { Invoice } from './entities/invoice.entity';
import { PrismaService } from '../prismaDB/prisma.service';
@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateInvoiceDto) {
    return this.prisma.invoice.create({
      data,
    });
  }

  findAll() {
    return this.prisma.invoice.findMany();
  }

  async findOne(id: number): Promise<Invoice | null> {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id },
    });

    if (!invoice) {
      throw new HttpException('user NOT found', 401);
    }

    return invoice;

    // return this.prisma.invoice.findUnique({
    //   where: { id },
    // });
  }

  async update(id: number, data: UpdateInvoiceDto) {
    return this.prisma.invoice.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.invoice.delete({
      where: { id },
    });

    const invoice = await this.prisma.invoice.findUnique({
      where: { id },
    });

    if (!invoice) {
      throw new HttpException('user NOT found', 401);
    } else {
      return { message: 'Invoice deleted successfully' };
    }
  }
}
