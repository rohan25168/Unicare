import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Fundraiserfor.css'; // Create this CSS file for styles

const Fundraiserfor = () => {
  const navigate = useNavigate();

  const categories = [
    { icon: 'fa-heartbeat', title: 'Medical', description: 'Raise funds to cover medical expenses and healthcare support.' },
    { icon: 'fa-book', title: 'Education', description: 'Support educational initiatives and provide learning resources.' },
    { icon: 'fa-leaf', title: 'Environment', description: 'Fund projects focused on environmental conservation and awareness.' },
    { icon: 'fa-child', title: 'Child', description: 'Help children with access to basic needs, health, and education.' },
    { icon: 'fa-user-friends', title: 'Old Parents', description: 'Support elderly care, health, and social well-being.' },
    { icon: 'fa-hands-helping', title: 'Others', description: "Fund initiatives that don't fit into other categories but matter." },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Fundraiser Categories</h1>
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-4">
            <div
              className="category-card text-center"
              onClick={() => navigate('/form')}
            >
              <i className={`fas ${category.icon} category-icon`}></i>
              <div className="category-title">{category.title}</div>
              <p className="category-description">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fundraiserfor;
