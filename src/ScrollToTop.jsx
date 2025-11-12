import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // जेव्हा route बदलतो, तेव्हा window वरून (top पासून) scroll होईल
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
