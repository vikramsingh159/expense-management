import React from "react";

const Spinner = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-self-center">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    );
};

export default Spinner;