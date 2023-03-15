import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
    return {
        random: Math.random()
    };
}) satisfies PageServerLoad;

export const actions = {
    identify: async ({ request }) => {
        const formData = await request.formData();
        const data = {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email_address: formData.get('email_address'),
            age: formData.get('age'),
            password: formData.get('password'),
            confirm_password: formData.get('confirm_password'),
            phone_number: formData.get('phone_number'),
            adulting: formData.get('adulting')
        };
        console.log('data', data);
        try {
            return {
                status: 400,
                success: false,
                error: 'Invalid data',
                ...data
            };

            console.log(formData);

            return {
                status: 200,
                success: true
            };
        } catch (e) {
            console.log('page:server:error', e);
        }
    }
} satisfies Actions;
