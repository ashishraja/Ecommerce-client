"use client"
import ProductCard from './ProductCard';
const Cards = () => {

  const products = [
    {
      id: "1",
      url: "https://cdn.thewirecutter.com/wp-content/media/2023/09/pressure-cooker-2048px-9805.jpg",
      name: "Sneakers",
      noOfReview: 4,
      price: "499"
    },
    {
      id: "2",
      url: "https://cdn.thewirecutter.com/wp-content/media/2023/09/pressure-cooker-2048px-9805.jpg",
      name: "Sneakers",
      noOfReview: 4,
      price: "499"
    },
    {
      id: "3",
      url: "https://cdn.thewirecutter.com/wp-content/media/2023/09/pressure-cooker-2048px-9805.jpg",
      name: "Sneakers",
      noOfReview: 4,
      price: "499"
    },
    {
      id: "4",
      url: "https://cdn.thewirecutter.com/wp-content/media/2023/09/pressure-cooker-2048px-9805.jpg",
      name: "Sneakers",
      noOfReview: 4,
      price: "499"
    },
    {
      id: "5",
      url: "https://cdn.thewirecutter.com/wp-content/media/2023/09/pressure-cooker-2048px-9805.jpg",
      name: "Sneakers",
      noOfReview: 4,
      price: "499"
    },
    {
      id: "6",
      url: "https://cdn.thewirecutter.com/wp-content/media/2023/09/pressure-cooker-2048px-9805.jpg",
      name: "Sneakers",
      noOfReview: 4,
      price: "499"
    },
    {
      id: "7",
      url: "https://cdn.thewirecutter.com/wp-content/media/2023/09/pressure-cooker-2048px-9805.jpg",
      name: "Sneakers",
      noOfReview: 4,
      price: "499"
    },
    {
      id: "8",
      url: "https://cdn.thewirecutter.com/wp-content/media/2023/09/pressure-cooker-2048px-9805.jpg",
      name: "Sneakers",
      noOfReview: 4,
      price: "499"
    }
  ];

  return (
      <div className="flex overflow-x-scroll gap-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
  );
}




export default Cards;

