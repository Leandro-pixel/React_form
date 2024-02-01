
import {useForms} from "../hooks/useForms"
import { FormSchema } from "../schemas/formSchema"
 
const Form = () => {

  const {register, handleSubmit, errors} = useForms();
//não precisamos daquele sates pois estamos usando o reac hook form para gerencias o formulario

 const onSubmit = (data: FormSchema) => {
  //aqui se houvesse backend mandariamos via fetch ou axios
  console.log(data)
 }

//usa primeiro o handlesubmit pra validar e depois o onsubmit interno
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 bg-white p-4 rounded-md border border-slate-300">
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Name:</label>
        <input 
        type="text" 
        id="name" 
        placeholder="Type your name" 
        {...register("name")} 
        className="h-10 pl-2 rounded-md border border-slate-300"
        />
        {errors.name && (<small className="text-red-500 italic">{errors.name.message}</small>)}
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="lastname">Lastname:</label>
        <input 
        type="text" 
        id="lastname" 
        placeholder="Type your Lastname" 
        {...register("lastname")} 
        className="h-10 pl-2 rounded-md border border-slate-300"
        />
        {errors.lastname && (<small className="text-red-500 italic">{errors.lastname.message}</small>)}
      </div>

      <div className="flex flex-col gap-2 mb-2 ">
        <label htmlFor="gender">Gender:</label>
        <select id="gender" {...register("gender")} 
        className="h-10 pl-1 rounded-md border border-slate-300"
        >
          <option value="select">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (<small className="text-red-500 italic">{errors.gender.message}</small>)}
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="email">E-mail:</label>
        <input 
        type="email" 
        id="email" 
        placeholder="Type your email" 
        {...register("email")} 
        className="h-10 pl-2 rounded-md border border-slate-300"
        />
        {errors.email && (<small className="text-red-500 italic">{errors.email.message}</small>)}
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="password">Password:</label>
        <input 
        type="password" 
        id="password" 
        placeholder="Type your password" 
        {...register("password")} 
        className="h-10 pl-2 rounded-md border border-slate-300"
        />
        {errors.password && (<small className="text-red-500 italic">{errors.password.message}</small>)}
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="confirmpassword">Confirm your password:</label>
        <input 
        type="password" 
        id="confirmpassword" 
        placeholder="Confirm your password" 
        {...register("confirmpassword")} 
        className="h-10 pl-2 rounded-md border border-slate-300"
        />
        {errors.confirmpassword && (<small className="text-red-500 italic">{errors.confirmpassword.message}</small>)}
      </div>

      <div className="flex flex-col gap-2 mb-2">
        <div className="flex gap-2">
        <input 
        type="checkbox" 
        id="agree" 
        placeholder="Confirm your password" 
        {...register("agree")} 
        />
        <label htmlFor="agree">Confirm terms.</label>
        </div>
        {errors.agree && (<small className="text-red-500 italic">{errors.agree.message}</small>)}
      </div>

      <button type="submit" className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all">Register</button>
    </form>
  )
}

export default Form