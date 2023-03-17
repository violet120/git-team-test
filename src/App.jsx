import AuthContainer from './components/AuthContainer'
import Input from './components/Input';
import { AuthButton } from './components/Button'

function App() {
  return (
    <AuthContainer>
      <h1>登入</h1>
      <Input label="帳號" placeholder="請輸入帳號" />
      <Input label="密碼" placeholder="請輸入密碼" />
      <AuthButton title={"登入"}/>
    </AuthContainer>
  );
}

export default App;
