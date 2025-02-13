import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>, 
    ) {} 

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async createUser(user: Partial<User>): Promise<User> {
        const novoUsuario = this.userRepository.create(user);
        return this.userRepository.save(novoUsuario);
    }

    async deleteUser(id: number): Promise<{ message: string }> {
        const result = await this.userRepository.delete(id);
        if (result.affected === 0) {
            return { message: 'Usuário não encontrado!' };
        }
        return { message: 'Usuário removido com sucesso!' };
    } 


}
 