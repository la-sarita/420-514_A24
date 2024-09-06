import { UserService } from '../src/services/user.service';

test('should return all users', async () => {
  const users = await UserService.getAllUsers();
  expect(users.length).toBe(1);
});