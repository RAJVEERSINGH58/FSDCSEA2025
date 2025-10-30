import React from 'react';

const Book = ({ book }) => {
  const { img, title, publisher, price } = book;

  return (
    <div style={{ 
        marginBottom: "10px", 
        width: "100%", // Ensure the div uses the full width of the card
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
    }}>
      <img 
        src={img} 
        alt={`Cover of ${title}`} 
        style={{ 
          // ✅ FIX: Constrain the image size explicitly
          width: "150px",      
          height: "200px",     
          // This ensures the image scales down to fit the container
          maxWidth: "100%", 
          maxHeight: "100%",
          objectFit: "contain", // Use 'contain' to see the whole image without cropping
          borderRadius: "4px", 
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          marginBottom: "15px"
        }} 
      />
      <p style={{ fontSize: "1.1em", fontWeight: "bold", margin: "10px 0 5px 0" }}>
        Title: {title}
      </p>
      <p style={{ fontSize: "0.9em", color: "#555", margin: "0" }}>
        Publisher: {publisher}
      </p>
      <p style={{ fontSize: "1em", fontWeight: "bold", color: "#007bff", margin: "5px 0 0 0" }}>
        Price: {price}
      </p>
    </div>
  );
};

export default Book;