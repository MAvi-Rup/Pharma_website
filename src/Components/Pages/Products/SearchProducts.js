import React, { useState } from 'react';

const SearchProducts = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Filter</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </div>
        </div>
    );
};

export default SearchProducts;