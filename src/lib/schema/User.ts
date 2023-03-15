import { z } from 'zod';

export const User = z.object({
    first_name: z.coerce.string(),
    last_name: z.coerce.string(),
    email_address: z.coerce.string().email(),
    password: z.coerce.string().min(8).max(255),
    confirm_password: z.coerce.string().min(8).max(255),
    phone_number: z.optional(z.coerce.string().regex(/^\d{10}$/)),
    age: z.coerce.number().min(18).max(120),
    adulting: z.coerce.boolean()
});
