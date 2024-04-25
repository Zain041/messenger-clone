import getConversations from "../actions/getConversations";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationsList";

const ConversationLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const conversations = await getConversations();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationLayout;
