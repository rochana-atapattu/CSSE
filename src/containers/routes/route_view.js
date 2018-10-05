import React from "react";

const BusShow =(props)=> {
   const  {handleDelete,route}=props


        if (!route) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={handleDelete}
                >
                    Delete Post
                </button>
                <h3>{route.routeId}</h3>
                <h3>{route.description}</h3>

            </div>
        );

}


export default BusShow