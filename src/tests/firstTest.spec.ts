import { User } from '../models/User';


test('it should be ok', () => {
    const user = new User();

    user.name = 'Cleber';

    expect(user.name).toEqual('Cleber');
});