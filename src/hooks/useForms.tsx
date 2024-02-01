import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form"
import { FormSchema, formSchema } from "../schemas/formSchema";

export const useForms = () => {
    const {
        register, 
        handleSubmit, 
        formState: {errors}
        } = useForm<FormSchema>({
        resolver: zodResolver(formSchema)
    });

    return {register, handleSubmit, errors} //enviando isso consigo no meu form.tsx obter elas e utilizar todos aqueles valor para o formulário
};