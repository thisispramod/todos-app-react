import React, {useState} from 'react';
const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = ((e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Can not blank Anyone");
            return false;
        }
        props.addTodo(title, desc);
    });
  return (
    <div className="container">
        <form onSubmit={submit} >
            <h3 className="my-3">Add Todo</h3>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" /> 
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="desc" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
            </div> 
            <button type="submit" className="btn btn-sm btn-success">Submit</button>
        </form>
    </div>
  )
}

export default AddTodo
