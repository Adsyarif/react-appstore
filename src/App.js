import "./categories.styles.scss";
import { CategoryItem } from "./components";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: [
        {
          id: 1,
          imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
          name: "Kiev",
          description: "New kiev",
        },
        {
          id: 2,
          imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
          name: "Base",
          description: "New base",
        },
        {
          id: 3,
          imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
          name: "Horm",
          description: "New horm",
        },
        {
          id: 4,
          imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
          name: "Siex",
          description: "New siex",
        },
      ],
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: [
        {
          id: 1,
          imgUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          name: "Jasz",
          description: "New jasz",
        },
        {
          id: 2,
          imgUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          name: "Brie",
          description: "New brie",
        },
        {
          id: 3,
          imgUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          name: "Cool",
          description: "New cool",
        },
        {
          id: 4,
          imgUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          name: "Seth",
          description: "New seth",
        },
      ],
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: [
        {
          id: 1,
          imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          name: "Look",
          description: "New lookv",
        },
        {
          id: 2,
          imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          name: "Weer",
          description: "New weer",
        },
        {
          id: 3,
          imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          name: "Oiu",
          description: "New oiu",
        },
        {
          id: 4,
          imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          name: "Gell",
          description: "New gell",
        },
      ],
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: [
        {
          id: 1,
          imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          name: "Heels",
          description: "New heels",
        },
        {
          id: 2,
          imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          name: "Beauty",
          description: "New beauty",
        },
        {
          id: 3,
          imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          name: "Screen",
          description: "New screen",
        },
        {
          id: 4,
          imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          name: "Cutes",
          description: "New cutes",
        },
      ],
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: [
        {
          id: 1,
          imgUrl: "https://i.ibb.co/R70vBrQ/men.png",
          name: "Bros",
          description: "New bros",
        },
        {
          id: 2,
          imgUrl: "https://i.ibb.co/R70vBrQ/men.png",
          name: "Metal",
          description: "New metal",
        },
        {
          id: 3,
          imgUrl: "https://i.ibb.co/R70vBrQ/men.png",
          name: "Heavy",
          description: "New heavy",
        },
        {
          id: 4,
          imgUrl: "https://i.ibb.co/R70vBrQ/men.png",
          name: "Jeerz",
          description: "New jeerz",
        },
      ],
    },
  ];

  return (
    <div className="categories-container">
      <div className="category-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default App;
