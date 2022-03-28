import Google from "../img/google.png"
import Facebook from "../img/facebook.png"
import Github from "../img/github.png"
import { signInWithGoogle, signInWithFacebook, signInWithGithub } from "../Firebase"

const Login = () => {

    return (
        
        <div className="login">
            <h1 className="loginTitle">Wybierz metodę logowania</h1>
            <div className="wrapper">
                <div className="left">
                <div className="loginButton google" onClick={signInWithGoogle}>
                    <img src={Google} alt="" className="icon" />
                    Google
                </div>
                <div className="loginButton facebook" onClick={signInWithFacebook}>
                    <img src={Facebook} alt="" className="icon" />
                    Facebook
                </div>
                <div className="loginButton github" onClick={signInWithGithub}>
                    <img src={Github} alt="" className="icon" />
                    Github
                </div>
                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or">LUB</div>

                </div>
                <div className="right">
                    <input type="text" placeholder="Nazwa użytkownika"/>
                    <input type="text" placeholder="Hasło"/>
                    <button className="submit">Zaloguj się</button>
                </div>
            </div>
        </div>
        

    )
}

export default Login