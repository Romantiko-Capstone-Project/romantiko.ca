import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "./verifyToken";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { redirectToLogin } from "/config/redirect.config";

export function staffPrivate(WrappedComponent) {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const verifyStaff = async () => {
        try {
          await verifyTokenAndAuthorization(); // staff privileges
        } catch (error) {
          redirectToLogin(router);
          console.error(error);
        }
      };

      verifyStaff();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}

export function adminPrivate(WrappedComponent) {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const verifyAdmin = async () => {
        try {
          await verifyTokenAndAdmin(); // admin privileges
        } catch (error) {
          redirectToLogin(router);
          console.error(error);
        }
      };

      verifyAdmin();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}
