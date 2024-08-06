// src/components/ProtectedRoute.tsx
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const authToken = getCookie("authToken");
    if (authToken === "dummyToken") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/login");
    }
  }, [router]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Optional: Loading state or spinner
  }

  return <>{children}</>;
};

export default ProtectedRoute;
