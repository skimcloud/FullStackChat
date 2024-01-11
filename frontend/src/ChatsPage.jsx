import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'c81069b4-d4e8-4e35-b4b9-fb8038a28748',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <PrettyChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage