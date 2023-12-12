//Wrapper component for the entire app
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/"); //redirect to home page
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return loader ? null : <>{children}</>;
}
export default Protected;
