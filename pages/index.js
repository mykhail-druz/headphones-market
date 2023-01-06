import { createClient } from "next-sanity";

const HomePage = ({ product }) => {
  return (
    <div>
      {product.map((props) => {
        console.log(props.image);
        return (
          <span className="bg-dark" key={props.id}>
            {props.name}
            {props.price}
          </span>
        );
      })}
    </div>
  );
};

const client = createClient({
  projectId: "f0p88h7i",
  dataset: "production",
  apiVersion: "2023-01-06",
  useCdn: false,
});

export async function getStaticProps() {
  const product = await client.fetch(`*[_type == "product"]`);

  return {
    props: {
      product,
    },
  };
}
export default HomePage;
