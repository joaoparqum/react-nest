import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

interface User {
    id: string;
    nome: string;
    idade: number;
    email: string;
}

const users: User[] = [];

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return users;
    }

    @Post()
    addUser(@Body() user: User) {
        users.push(user);
        return { 
            message: 'Usuário cadastrado!', user
        };
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        const index = users.findIndex((user) => user.id === id );
        if (index !== -1) {
            users.splice(index, 1);
            return { message: 'Usuário removido!' };
        }
        return { message: 'Usuário não encontrado!'};        
    }

}
