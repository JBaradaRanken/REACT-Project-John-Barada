import React, {useState} from "react";

function Student (props)
{
    return(
    <div className='card'>
        <img className='card-img-top mx auto'
        src={props.student.image}
        alt='Student Image'
        />
        <ul className='list-group list-group-flush'>
            <li className='list-group-item text-center fw-bold'>
                {props.student.firstName}
            </li>
            <li className='list-group-item text-center fw-bold'>
                {props.student.lastName}
            </li>
            <li className='list-group-item text-center fw-bold'>
                {props.student.gradYear}
            </li>
            <li className='list-group-item text-center fw-bold'>
                {props.student.email}
            </li>
            <button type="button" className="btn-btn-danger"
            onClick={() => props.removeStudent(props.student)}>
                Delete Student
            </button>
        </ul>
    </div>
    )
}