import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "orange" : "none",
          borderBottom: match ? "3px solid orange" : "none",
          padding: "6px 4px",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
  );
}

export default CustomLink;
