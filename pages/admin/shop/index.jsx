import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Index from "..";
import ShopTab from "../../../src/components/admin/ShopTab";

const Shop = () => {

  const router = useRouter();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  if (!loggedIn) {
    router.push("/Login");
  }
  
  return (
    <Index>
      <ShopTab />
    </Index>
  );
};

export default Shop;
