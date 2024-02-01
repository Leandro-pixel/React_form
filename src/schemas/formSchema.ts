//usamos o zod para fazer o schema, conjunto do race form com o zod para validações mais personalizadas
//validações com errso de campos
import {z} from "zod";

export const formSchema = z.object({
    name: z.string().min(3, 'the minimum of characters are 3.'), //campo name com o minimo de 3 caracteres
    lastname: z.string().min(3, 'the minimum of characters are 3.'),
    gender: z.string().refine((field) => field !== "select", { //esse campo é um select, para validar usamos metodo refine
            message: "Choose a gender"
    }),
    email: z
        .string()
        .min(1, "The field is mandatory")
        .email("Use a valid e-mail"),
    password: z.string().min(6, "The password needs to have at leats 6 characters"),
    confirmpassword: z
        .string()
        .min(6, "The password confirmation needs to have at leats 6 characters"),
    agree: z.boolean().refine((field) => field === true, {
        message: "You need to agreed"
    }),
}).refine((field) => field.password === field.confirmpassword, {
    message: "Passwords needs to be the same",
    path: ["confirmpassword"],
});

export type FormSchema = z.infer<typeof formSchema>; //exportando como type