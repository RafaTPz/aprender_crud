import "./styles.css";
import {useForm} from "react-hook-form";
import {api} from "../../lib/axios"
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import {useNavigate} from 'react-router-dom'


const postSchema = yup.object({
  title: yup.string().required(("O campo do título deve ser preenchido!")),
  description: yup.string().required(("O campo da descrição deve ser preenchido!")),
  content: yup.string().required(("O campo de conteúdo deve ser preenchido!"))
})
export function Form({title, textButton}) {

  const navigate = useNavigate();

  const {register, handleSubmit, reset, formState: { errors }} = useForm({
    resolver: yupResolver(postSchema)
  });

  function handleCreatePost(data) { 
    api.post('/posts', data)
    console.log('Criado com sucesso!')
    reset()
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(handleCreatePost)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")}/>
        {errors.title?.message}
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")} />
        {errors.description?.message}
      </div>

      <div className="field">
        <textarea placeholder="Conteúdo" {...register("content")}/>
        {errors.content?.message}
      </div>

      <button type="submit">{textButton}</button>
    </form>
  );
}