import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../Hooks/useProduct';

const SearchProducts = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProduct] = useProducts()
    
    function filterItems(items, query) {
        return items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    }
    let product = filterItems(products, searchQuery)
    // useEffect(()=>{
    //     product= ;
    // },[searchQuery])
    const navigate = useNavigate()
    const navigateProduct = id => {
        navigate(`/allproduct/${id}`)
    }
    return (
        <div className='container'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Filter</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                <p>{console.log(searchQuery,)}</p>

            </div>
            <div className='row'>
                {console.log(product)}
                {
                    product.map((product=><div className="col-md-3 pe-2 pb-3"><img onClick={()=>{navigateProduct(product._id)}} src={product.img} width='255px' /> </div>))
                }

            </div>
        </div>
    );
};

export default SearchProducts;

// function filterItems(produ, query) {
//     return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
// }