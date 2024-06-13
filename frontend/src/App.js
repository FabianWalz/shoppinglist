import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState(1);

  useEffect(() => {
    axios.get('http://localhost:8080/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the items!', error);
      });
  }, []);

  const handleAddItem = () => {
    if (newItemName && newItemQuantity > 0) {
      axios.post('http://localhost:8080/items', { name: newItemName, quantity: newItemQuantity })
        .then(response => {
          setItems([...items, response.data]);
          setNewItemName('');
          setNewItemQuantity(1);
        })
        .catch(error => {
          console.error('There was an error adding the item!', error);
        });
    }
  };

  const handleDeleteItem = (id) => {
    axios.delete(`http://localhost:8080/items/${id}`)
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the item!', error);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Shopping List</h1>
        <div className="input-container">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Name"
            className="input"
          />
          <input
            type="number"
            value={newItemQuantity}
            onChange={(e) => setNewItemQuantity(e.target.value)}
            placeholder="Quantity"
            min="1"
            className="input"
          />
          <button onClick={handleAddItem} className="add-button">Add new item</button>
        </div>
        <ul className="item-list">
          {items.map(item => (
            <li key={item.id} className="item">
              <span className="item-name">{item.quantity}x {item.name}</span>
              <button onClick={() => handleDeleteItem(item.id)} className="delete-button">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
