import React from 'react';

const Service = (props) => {
    const { name, img, price, subscription, description } = props.service;
    console.log(props)
    return (
        <div className="shadow" >
            {/* <div>
            <h1>{name}</h1>
           <div className="">
           <img className="mx-auto" src={img} alt="" />
           </div>
            <p>Price : {price}</p>
        </div> */}
            <div className=" w-full lg:max-w-full lg:flex">
                <div className="border  border-gray-400  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                    <img className="mx-auto" src={img} alt="" />
                        <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
                        <p className="text-gray-700 text-base">{description}</p>
                    </div>
                    <button className="flex items-center border p-2">
                        <img className="w-10 h-10 rounded-full mr-4" src={img} alt="Avatar of Writer" />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">Take the servic</p>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Service;