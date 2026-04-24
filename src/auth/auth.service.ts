import { Injectable} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from '../prisma/prisma.service'; //⚠️


@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService){}

  async register(data: CreateAuthDto) {

    const newUser = await this.prisma.user.create({
        data: {
        email: data.email,
        name: data.name,
        password: data.password,
      },
    });
;

    
    return { user : newUser};
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
