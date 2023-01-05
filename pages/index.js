const HomePage = ({ product }) => {
  return (
    <div>
      {product.map((props) => {
        return <div key={props.id}>{props.name}</div>;
      })}
    </div>
  );
};
export async function getStaticProps() {
  const product = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
  ];

  return {
    props: {
      product,
    },
  };
}
export default HomePage;
