import { ReactNode } from "react";
import Sidebar from "../components/sidebar/Sidebar";

const UsersLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
};
export default UsersLayout;
