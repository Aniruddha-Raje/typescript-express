import { Body, Controller, Get, Post, Put, Delete, Route, Tags, Path, Query } from 'tsoa';

interface User {
  id: string;
  name: string;
  email: string;
}

let users: User[] = [];

@Route("users")
@Tags("User")
export class UserController extends Controller {

  @Get("/")
  public getUsers(): User[] {
    return users;
  }

  @Get("/id/{id}")
  public getUser(@Path() id: string): User | undefined {
    return users.find(user => user.id === id);
  }

  @Post("/")
  public createUser(@Body() user: Omit<User, "id">): User {
    const newUser = { ...user, id: `${Date.now()}` };
    users.push(newUser);
    return newUser;
  }

  @Put("/{id}")
  public updateUser(@Path() id: string, @Body() update: Partial<User>): User | undefined {
    const user = users.find(u => u.id === id);
    if (user) Object.assign(user, update);
    return user;
  }

  @Delete("/{id}")
  public deleteUser(@Path() id: string): { success: boolean } {
    users = users.filter(u => u.id !== id);
    return { success: true };
  }

  @Get("/search")
  public searchUser(@Query() searchBy: string) {
    return "ok";
  }
}
