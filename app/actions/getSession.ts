import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const getSesssion = async () => {
  return await getServerSession(authOptions);
};

export default getSesssion;
