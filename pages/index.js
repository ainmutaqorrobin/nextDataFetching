import fs from "fs/promises";
import { notFound } from "next/navigation";
import path from "path";
export default function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
export async function getStaticProps() {
  console.log("regenerating...");

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: { products: data.products },
    revalidate: 2 /*depends on application (sec)*/,
  };
}
