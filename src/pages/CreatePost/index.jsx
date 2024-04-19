import { Form } from "../../components/Form";
import "./styles.css";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

export function CreatePost() {

  const navigate = useNavigate();

  function handleCreatePost(data) { 
    api.post('/posts', data)
    // reset()
    navigate('/')
  }


  return (
    <div>
      <Form title={"Criar publicação"} textButton={"Enviar"} onAction={handleCreatePost}/>
    </div>
  );
}