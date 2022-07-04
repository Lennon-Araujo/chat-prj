import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './../services/users.service'

@Controller('/users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ) { }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() body: any) {
        return this.usersService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: any) {
        return this.usersService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.usersService.remove(id);
    }
}
