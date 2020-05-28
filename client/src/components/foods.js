import React from 'react';

const Foods = () => {

    return (
        <div className="container-fluid foods">
            <div className="container">
            <form class="form-inline d-flex justify-content-center md-form form-sm">
                <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                aria-label="Search" />
                <i class="fas fa-search" aria-hidden="true"></i>
            
            </form>
            </div>
        </div>
    )
}

export default Foods;