import { UserService } from '../src/services/user.service';

jest.mock('../src/services/user.service');  // Mock du service pour les tests

test('should return all users', async () => {
  // Simuler une réponse de getAllUsers
  (UserService.getAllUsers as jest.Mock).mockResolvedValue([{ id: 1, name: 'John Doe' }]);

  const users = await UserService.getAllUsers();
  expect(users.length).toBe(1);
  expect(users[0].name).toBe('John Doe');
});
