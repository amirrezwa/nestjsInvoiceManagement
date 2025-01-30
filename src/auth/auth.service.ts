import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDTO } from './dto/auth.dto';

const fakeUsers = [
  { id: 1, username: 'anson', password: 'password', roles: ['user'] },
  {
    id: 2,
    username: 'amir',
    password: 'secret',
    roles: ['user', 'admin'],
  },
];
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateUser({ username, password }: LoginRequestDTO): string {
    const user = fakeUsers.find(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password === password,
    );
    if (!user) {
      throw Error('User not found');
    }
    return this.jwtService.sign({
      username: user.username,
      id: user.id,
      roles: user.roles ?? [],
    });
  }
}
