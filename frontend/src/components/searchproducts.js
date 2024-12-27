import React, { useState } from 'react';


const SearchProduct = () => {
    const [searchCriteria, setSearchCriteria] = useState({
      searchTerm: '',
      searchBy: 'name',
      createdAfter: ''
    });
  
    const [searchResults, setSearchResults] = useState([]);
  
    const searchIdentifiers = [
      { value: 'name', label: 'Product Name' },
      { value: 'sellerIdentifier', label: 'Seller Identifier' },
      { value: 'size', label: 'Size' },
      { value: 'color', label: 'Color' }
    ];
  
    const handleSearch = (e) => {
      e.preventDefault();
      // Simulated search results - replace with actual API call
      console.log('Searching with criteria:', searchCriteria);
      // Mock search results
      setSearchResults([
        { id: 1, name: 'Sample Product 1', category: 'Clothing' },
        { id: 2, name: 'Sample Product 2', category: 'Electronics' }
      ]);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSearchCriteria(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    return (
      <div className="container mt-4">
        <h2>Search Products</h2>
        <form onSubmit={handleSearch} className="mb-4">
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Search Term</label>
              <input
                type="text"
                className="form-control"
                name="searchTerm"
                value={searchCriteria.searchTerm}
                onChange={handleChange}
                placeholder="Enter search term..."
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Search By</label>
              <select
                className="form-select"
                name="searchBy"
                value={searchCriteria.searchBy}
                onChange={handleChange}
              >
                {searchIdentifiers.map(identifier => (
                  <option key={identifier.value} value={identifier.value}>
                    {identifier.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Created After</label>
              <input
                type="date"
                className="form-control"
                name="createdAfter"
                value={searchCriteria.createdAfter}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
  
        {searchResults.length > 0 && (
          <div className="mt-4">
            <h3>Search Results</h3>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map(product => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>
                        <button className="btn btn-sm btn-info me-2">View</button>
                        <button className="btn btn-sm btn-warning">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export { SearchProduct };