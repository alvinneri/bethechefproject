import React ,{useState} from 'react';
import {useHistory} from 'react-router-dom';


const SearchBar = () => {
    
    const history = useHistory();
    const [q, setQ] = useState('');

    const handleChange = (e) => {
        setQ(e.target.value);
    }

    const onSubmit = (e) => {

        history.push(`/search/${q}`);
        
    }

    return (
        <div className="container-fluid foods mt-5">
            <div className="container">
            <form class="form-inline d-flex justify-content-center" onSubmit={onSubmit}>
                <input class="form-control form-control-sm mr-3 w-75 search-input" type="text" placeholder="Search for a food"
                aria-label="Search" value={q} onChange={handleChange} />
                <i class="fas fa-search" aria-hidden="true"></i>
            </form>
            </div>
        </div>
    )
}

export default SearchBar;