import { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

const withAuth = (WrappedComponent: any) => {
  const WithAuthComponent = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const authToken = getCookie("authToken");
      if (!authToken) {
        router.push("/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  WithAuthComponent.displayName = `WithAuth(${getDisplayName(
    WrappedComponent
  )})`;

  return WithAuthComponent;
};

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withAuth;
