import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { popularProducts } from "../data";
import { _service } from "../Service/api_service";
import Layout from "./Layout";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const { categoryId } = useParams();
  const { data: products, isLoading } = useQuery("getAllProducts", () =>
    _service.getAllProducts(categoryId)
  );
  if (isLoading) {
    return <h2>Loading ................</h2>;
  }
  return (
    <Layout>
      <div style={{ display: "flex" }}>
        {products &&
          products?.data.length > 0 &&
          products?.data.map((item) => <Product item={item} key={item.id} />)}
      </div>
    </Layout>
  );
};

export default Products;
