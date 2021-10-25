//Aula YT
import React from 'react'
import { useForm } from 'react-hook-form'

/* yupResolver responsavel por fazer validações*/
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';

/* validação das inputs */
const validationRegister = yup.object().shape({
  name: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
  surname: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
  cpf: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
  birth: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
  email: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
  password: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
})

function Regis() {

  /* O useForm retorna as seguintes coisas
    --register: avisa quais serão os inputs que iremos usar
    --hundleSubmite: lida com o envio das informações
    --formState: {erros}: serve para dar avisos de erros na validação
  */

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationRegister)
  })

  const addAdmin = data => api.post("http://localhost:3001/admins", data)
  .then(() => {
    console.log("Deu certo")
  })
  .catch(() => {
    console.log("Deu errado")
  });

  return (
    <main>
      <div className="card-post" >

        <h1>Criar postagem</h1>
        <div className="line-post" ></div>

        <div className="card-body-post" >

          <form onSubmit={handleSubmit(addAdmin)} >

            <div className="fields" >
              <label>Nome</label>
              <input type="text" name="name" {...register("name")} />
              <p className="error-message">{errors.name?.message}</p>
            </div>

            <div className="fields" >
              <label>Sobre nome</label>
              <input type="text" name="surname" {...register("surname")} />
              <p className="error-message">{errors.surname?.message}</p>
            </div>

            <div className="fields" >
              <label>CPF</label>
              <input type="text" name="cpf" {...register("cpf")} />
              <p className="error-message">{errors.cpf?.message}</p>
            </div>

            <div className="fields" >
              <label>Data de nascimento</label>
              <input type="text" name="birth" {...register("birth")} />
              <p className="error-message">{errors.birth?.message}</p>
            </div>

            <div className="fields" >
              <label>Email</label>
              <input type="text" name="email" {...register("email")} />
              <p className="error-message">{errors.email?.message}</p>
            </div>

            <div className="fields" >
              <label>Senha</label>
              <input type="text" name="password" {...register("password")} />
              <p className="error-message">{errors.password?.message}</p>
            </div>

            <div className="btn-post" >
              <button type="submit" >Enviar</button>
            </div>

          </form>

        </div>

      </div>
    </main>
  )
}

export default Regis;