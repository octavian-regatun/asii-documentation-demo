import React from "react";
import ColorModeToggle from "@theme-original/ColorModeToggle";
import { logout } from "@site/src/utils/firebase";

export default function ColorModeToggleWrapper(props) {
  return (
    <>
      <a
        style={{
          marginRight: 15,
          cursor: "pointer",
          color: "var(--ifm-color-content)",
        }}
        onClick={() => logout(() => window.location.reload())}
      >
        Logout
      </a>
      <ColorModeToggle {...props} />
    </>
  );
}
