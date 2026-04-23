// import { useState, useEffect } from "react";
// import axios from "axios";
// import { TextField, Button, List, ListItem } from "@mui/material";

// const API = "http://localhost:5000/posts";

// export default function Admin() {
//   const [posts, setPosts] = useState([]);
//   const [title, setTitle] = useState("");

//   const fetch = async () => {
//     const res = await axios.get(API);
//     setPosts(res.data);
//   };

//   useEffect(() => {
//     fetch();
//   }, []);

//   const add = async () => {
//     await axios.post(API, { title });
//     setTitle("");
//     fetch();
//   };

//   const del = async (id) => {
//     await axios.delete(`${API}/${id}`);
//     fetch();
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>CRUD</h2>
//       <TextField value={title} onChange={(e) => setTitle(e.target.value)} />
//       <Button onClick={add}>Add</Button>

//       <List>
//         {posts.map((p) => (
//           <ListItem key={p.id}>
//             {p.title}
//             <Button onClick={() => del(p.id)}>Delete</Button>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// }