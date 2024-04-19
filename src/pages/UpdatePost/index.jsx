import { Form } from "../../components/Form";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function UpdatePost() {

    const {id} = useParams();
    const navigate = useNavigate();
  
    function handleUpdatePost(data) {
        api.put(`/posts/${id}`, data);
        navigate('/');
    }

    // useEffect(() => {
    //     api.get(`/post/${id}`)
    //     .then(response => console.log(response.data))
    // }, [])

    return (
        <div>
            <Form title={"Editar publicação"} textButton={"Atualizar"} onAction={handleUpdatePost}/>
        </div>
    )
}