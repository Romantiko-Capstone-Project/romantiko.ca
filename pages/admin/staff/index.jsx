import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Index from "..";
import StaffTab from "../../../src/components/admin/StaffTab";

const Staff = () => {
  const router = useRouter();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  if (!loggedIn) {
    router.push("/Login");
  }

  return (
    <Index>
      <StaffTab />
    </Index>
  );
};

export default Staff;
