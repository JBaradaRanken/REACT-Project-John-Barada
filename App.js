import "bootstrap/dist/css/bootstrap.min.css";
import nanoid from 'nanoid';
import "./App.css";
import React, { useState } from 'react';
import { Button } from "bootstrap";
import AddStudent from "./AddStudent";
import Student from "./Student";
import _ from "lodash";

function App()
{

    const [allStudents, setAllStudents] = useState(null);
    const [searchResults, setSearchResults] = useState(null);
    const [keywords, setKeyowrds] = useState("");
    const [gradYear, setGradYear] = useState("");
    const students = [
        {
            id: nanoid(),
            image: "images/student1.jpg",
            "firstname": "Adi",
            "lastname": "Gorler",
            "email": "agorler0@zimbio.com",
            gradYear: 2020,
        },
        {
            id: nanoid(),
            image: "images/student2.jpg",
            "firstname": "Caesar",
            "lastname": "Gossage",
            "email": "cgossage2@ebay.com"
        },
        {
            id: nanoid(),
            image: "images/student3.jpg",
            "firstname": "Lena",
            "lastname": "Zukierman",
            "email": "lzukierman3@reuters.com",
            gradYear: 2020,
        },
        {
            id: nanoid(),
            image: "images/student4.jpg",
            "firstname": "Lola",
            "lastname": "Broadhead",
            "email": "lbroadhead4@slate.com",
            gradYear: 2020,
        },
        {
            id: nanoid(),
            image: "images/student5.jpg",
            "firstname": "Maren",
            "lastname": "Johantges",
            "email": "mjohantges5@ed.com",
            gradYear: 2020,
        },
        {
            id: nanoid(),
            image: "images/student6.jpg",
            "firstname": "Rona",
            "lastname": "Sheldrake",
            "email": "rsheldrake@sciencedirect.com",
            gradYear: 2020,
        },
        {
            id: nanoid(),
            image: "images/student7.jpg",
            "firstname": "Nelle",
            "lastname": "Tithevote",
            "email": "ntithecote7@slashdot.org",
            gradYear: 2020,
        },
        {
            id: nanoid(),
            image: "images/student9.jpg",
            "firstname": "Vivia",
            "lastname": "McNeillie",
            "email": "vmcneillie8@amazonaws.com",
            gradYear: 2020,
        },
        {
            id: nanoid(),
            image: "images/student10.jpg",
            "firstname": "Anni",
            "lastname": "O' Timony",
            "email": "aotimony9@liveinternet.ru",
            gradYear: 2020,
        },
    ]
    const saveStudents = (students) =>
    {
        setAllStudents(students);
        setSearchResults(students);
    }
    const addStudent = (newStudent) => {
        const updatedStudents = [...allStudents, newStudent];
        setAllStudents(updatedStudents);
    };
    const searchStudents = () =>
    {
        let keywordArray = [];
        if (keywords)
        {
            keywordARray = keywords.toLowerCase().split(' ');

            if (keywordsArray.length > 0)
            {
                const searchResults = allStudents .filter(student =>
                    {
                        for (const word of keywordsArray)
                        {
                            if (student.firstName.toLowerCase().includes(word) ||
                            student.lastName.toLowerCase().includes(word)) ||
                            student.gradYear === parseInt(word)

                            {
                                return true;
                            }
                        }
                        return false;
                    });
            }
            else{
               setSearchResults(allStudents); 
            }
        }
    }
    return (
        <div className='container'>
            <AddStudent />
            <div className="row">
                {allStudents &&
                allStudents.map((student) =>
                (
                    <div className="col-lg-2"> key ={student.id}
                        <div className="card">
                            <img className="img-fluid"
                                src={student.image}
                                alt="Student Image"
                            />
                            <ul className="list-group list-group-flush">
                                <li className= "list-group-item">
                                    {student.id}
                                    </li>
                                    <li className= "list-group-item">
                                    {student.firstName}
                                    </li>
                                    <li className= "list-group-item">
                                    {student.lastName}
                                    </li>
                                    <li className= "list-group-item">
                                    {student.email}
                                    </li>  
                                    </ul>                     
                        </div>
                    </div>
                ))}
            </div>
            {allStudents &&
            <Button
                                type="button"
                                className="btn btn-lg btn-success"
                                onClick={ () => setAllStudents(students)}>
                                    
                                    Save students
                                </Button>
            }
            <div className="row mt-4">
        <div className= "col-md-4">
        <label htmlFor="txtKeywords">
            Search by First Name or Last Name
        </label>
            <input type="text"
            className = "form-control"
            placeholder= "Name here"
            onChange = {evt =>
            setKeyowrds(evt.currentTarget.value)
                        }/>
        </div>
        </div>
        <div className = 'col-md-4'>
            <select className='form-select'>
                <option calue = ''>Select Grad Year</option>
            </select>
        </div>
        <div className ="col-md-4">
            <button type="button"
            className= "btn btn-primary"
            onClick={searchStudents}>
                Search Students
            </button>
        </div>
        <div className='col-md-4'>
            <label htmlFor='txtKeyword'>Search by Graduation Year</label>
            <select className='form-select'>
                onChange={evt =>
                setGradYear(evt.currentTarget.value)}>
                <option value="">Select Grad Year</option>
                {/* Lodash? */}
                {
                    _(allStudents).map(
                        student => student.gradYear).sort.uniq().map(
                            year => <option key={year} value={year} {year} >
                            </option>.value()}
                        )
                    )
                }
            </select>
        </div>
        <AddStudent addStuddent = {addStudent} />
        </div>
    )

}