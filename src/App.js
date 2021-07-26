import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';
import './App.css';


const App = () => {
    if(!localStorage.getItem('username')){
        return <LoginForm />
    }
    return (
        <ChatEngine
            height="100vh"
            projectID="d2e31b69-7142-4129-ae94-cfb82ae2da50"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps }/>}
            
        />
    );
}

export default App;

