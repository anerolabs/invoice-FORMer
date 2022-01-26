import React, { useState } from 'react';

const SearchBusiness = ({handleLookupBusiness}) => {
  const [ lookupBusiness, setLookupBusiness ] = useState('');

  return (
    <div className='sub-panel'>
      Have you been here before?
      Type in your business name to pull up your invoices.
      <form onSubmit={(e) => { handleLookupBusiness(e, lookupBusiness) }}>
        <label>
          <input type='text' value={lookupBusiness}
            onChange={(e) => {setLookupBusiness(e.target.value)}} />
        </label>
        <input type='submit' className='btn submit' value='Submit' />
      </form>
    </div>
  )
};

export default SearchBusiness;
