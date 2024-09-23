import fs from "fs/promises";
import path from "path";
export default function ProductDetail(props) {
  const { loadedProduct } = props;
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const pId = params.pId;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const product = data.products.find((product) => product.id === pId);

  return { props: { loadedProduct: product } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pId: "p1" } },
      { params: { pId: "p2" } },
      { params: { pId: "p3" } },
    ],
    fallback: false,
  };
}
