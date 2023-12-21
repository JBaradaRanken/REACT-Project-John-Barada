import {nanoid} from "nanoid";
import React, {useState} from "react";

function AddStudent()
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState ("");
    const [selectedFile, setSelecctedFile] = useState();

    const doWork = () =>
    {
        const newStudent = 
        {
            "id":nanoid(),
            "firstName":firstName,
            "lastName":lastName,
            "email":email,
            "image":URL.createObjectURL(selectedFile)
        };

        props.addStudent(newStudent);
return (
    <><div className="row mt-4">
        <div className="col-md-2">
            <label htmlFor='txtFirstName' className='form-label'>
                First Name
            </label>
            <input type="text"
                id="txtFirstName"
                placeholder="First Name"
                className="form-control"
                onChange={(evt) => setFirstName(evt.currentTarget.value)}
                value={firstName} />
        </div>

        <div className="col-md-3"><label htmlFor='txtLastName' className='form-label'>
            Last Name
        </label>
            <input type="text"
                id="txtLastName"
                placeholder="Last Name"
                className="form-control"
                onChange={(evt) => setFirstName(evt.currentTarget.value)}
                value={lastName} />
        </div>

        <div className="col-md-3"><label htmlFor='txtEmail' className='form-label'>
            Email
        </label>
            <input type="text"
                id="txtEmail"
                placeholder="Email"
                className="form-control"
                onChange={(evt) => setFirstName(evt.currentTarget.value)}
                value={Email} />
        </div>

        <div className="col-md-4"><label htmlFor='fileUpload' className='form-label'>
            Student Image
        </label>
            <input type="file" name="file"
                id="fileUpload"
                placeholder="Image"
                className="form-control"
                onChange={imageUpdate}
                value={firstName} />
        </div>
        <div className="col-md-4"><label htmlFor='fileUpload' className='form-label'>
            Student Image
        </label>
            <input type="file" name="file"
                id="fileUpload"
                placeholder="Image"
                className="form-control"
                onChange={(evt) => setEmail(evt.currentTarget.value)}
                value={gradYear} />
        </div>
    </div>
    
    <div className='col-md-4'>
            <button type="button" id="btnAdd"
                className="btn btn-lg btn-success">
            </button>
        </div>
        </>
    )
}
}
export default AddStudent;