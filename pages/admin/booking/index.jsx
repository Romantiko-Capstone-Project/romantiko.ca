import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Index from "..";
import BookingTab from "../../../src/components/admin/BookingTab";

const Booking = () => {
  const router = useRouter();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  if (!loggedIn) {
    router.push("/Login");
  }

  return (
    <Index>
      <BookingTab />
    </Index>
  );
};
export default Booking;
