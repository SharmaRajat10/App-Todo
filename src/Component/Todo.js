import React, { useState } from 'react';

export default function Todo() {
  const [activity, setActivity] = useState('');
  const [listdata, setListdata] = useState([]);

  function addActivity() {
    setListdata((prevList) => {
      const updatedList = [...prevList, activity];
      console.log(updatedList);
      setActivity('');
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListdata = listdata.filter((elem, id) => {
      return i !== id;
    });
    setListdata(updatedListdata);
  }

  function removeAll() {
    setListdata([]);
  }

  return (
    <>
      <div>
        <div className='Container'>
          <div className='header'>TodoList</div>
          <input
            type='text'
            placeholder='Add activity'
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <button onClick={addActivity}>Add</button>
          <p className='List-heading'>Here is Your List:{')'}</p>
          {listdata.length !== 0 &&
            listdata.map((data, i) => (
              <p key={i}>
                <div className='listdata'>{data}</div>
                <button className='btn-position' onClick={() => removeActivity(i)}>
                  Remove(-)
                </button>
              </p>
            ))}
          {listdata.length >= 1 && (
            <button onClick={removeAll}>Remove all</button>
          )}
        </div>
      </div>
    </>
  );
}