// App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    profession: '',
    image: null
  });
  
  const [cards, setCards] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({
        ...formData,
        image: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.image) {
      const reader = new FileReader();
      reader.onload = () => {
        const newCard = {
          ...formData,
          id: Date.now(),
          imageUrl: reader.result
        };
        setCards([...cards, newCard]);
        setFormData({
          name: '',
          age: '',
          profession: '',
          image: null
        });
      };
      reader.readAsDataURL(formData.image);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Age"
            required
          />
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
            placeholder="Profession"
            required
          />
          <div className="file-input-container">
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
              accept="image/*"
              required
            />
          </div>
          <button type="submit">Create Card</button>
        </div>
      </form>

      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.name} />
            <div className="card-info">
              <h3>{card.name}</h3>
              {expandedCard === card.id ? (
                <>
                  <p>Age: {card.age}</p>
                  <p>Profession: {card.profession}</p>
                  <button onClick={() => setExpandedCard(null)}>View Less</button>
                </>
              ) : (
                <button onClick={() => setExpandedCard(card.id)}>View More</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;