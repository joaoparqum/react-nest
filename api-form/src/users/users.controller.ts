import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('usuarios')
export class UsersController {

    constructor( private userService: UsersService) {}

    @Get()
    async getUsuarios() {
        return this.userService.findAll();
    }

    @Post()
    async addUsuario(@Body() user: Partial<User>) {
        const novoUsuario = await this.userService.createUser(user);
        return {
            message: 'Usuário cadastrado com sucesso!',
            user: novoUsuario,
        };
    }

    @Delete(':id')
    async deleteUsuario(@Param('id') id: number) {
        return this.userService.deleteUser(id);        
    }

}
