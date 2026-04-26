import { Injectable} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/auth/prisma/prisma.service'; 
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService){}

  async register(data: CreateAuthDto) {
    const hachedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await this.prisma.user.create({
        data: {
        email: data.email,
        name: data.name,
        password: hachedPassword,
      },
      select: {
    id: true,
    email: true,
    name: true,
    //on ne retourne pas le mots de passe pour la sécurité 
  },
    });
;

    
    return { message :" Compte crée avec succès "};
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
