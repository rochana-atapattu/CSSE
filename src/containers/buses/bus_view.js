import React from "react";

const BusShow =(props)=> {
   const  {handleDelete,bus}=props


        if (!bus) {
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
                <h3>{bus.busNumber}</h3>
                <h3>{bus.busRootStatus}</h3>
                <h3>{bus.currentLocation}</h3>
                <h3>{bus.routeId}</h3>
                <h3> {bus.status ? "Active" : "Inactive"}</h3>
            </div>
        );

}


export default BusShow