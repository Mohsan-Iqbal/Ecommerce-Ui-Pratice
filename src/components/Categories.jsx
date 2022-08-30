import { useQuery } from "react-query";
import styled from "styled-components";
// import { categories } from "../data";
import { mobile } from "../responsive";
import { _service } from "../Service/api_service";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  const { data: categories } = useQuery(
    "getCategories",
    _service.getCategories
  );
  return (
    <Container>
      {categories?.data &&
        categories?.data.length > 0 &&
        categories?.data.map((item) => (
          <CategoryItem item={item} key={item._id} />
        ))}
    </Container>
  );
};

export default Categories;
