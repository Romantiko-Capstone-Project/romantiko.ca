import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Index from "..";
import ServicesTab from "../../../src/components/admin/ServicesTab";

const Shop = () => {

  const router = useRouter();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  if (!loggedIn) {
    router.push("/Login");
  }
  return (
    <Index>
      <ServicesTab />
    </Index>
  );
};

export default Shop;
