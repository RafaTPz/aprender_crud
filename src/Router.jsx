import {Routes, Route} from 'react-router-dom'
import { Feed} from "./pages/Feed"
import { CreatePost} from "./pages/CreatePost"
import { UpdatePost} from "./pages/UpdatePost"
import { OnePost} from "./pages/OnePost"

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/updatepost/:id" element={<UpdatePost />} />
            <Route path="/post/1" element={<OnePost />} />
        </Routes>
    );
}