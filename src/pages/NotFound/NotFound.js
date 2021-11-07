import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mt-4">
            <img className="mx-auto" src="https://i.ibb.co/HrSJvVS/3747371.jpg" alt=""/>
            <Link className="p-2 text-xl border-1 rounded bg-indigo-600 text-white" to="/home">Back To Home</Link>
        </div>
    );
};

export default NotFound;