import './LoginStyle.css';
import {auth, provider} from '../Firebase';
import {useStateValue} from './StateProvider';
import {useEffect} from 'react';

const Login = () => {
    const [{user}] = useStateValue();
    const [{}, dispatch] = useStateValue();
    const googleSignIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).then(result =>{
            dispatch({
                type: 'SET_USER',
                user: result.user
            })
        })
        .catch(error => {
            alert(error.message)
        })
    }
    const signOut = (e) => {
        e.preventDefault();
        auth.signOut().then(result => {
            dispatch({
                type: 'SET_USER',
                user: result
            })
        })
        .catch(error => {
            alert(error)
        })
    }

    // Save th data into local storage so when page Refresh data remains in state
    useEffect(() => {
        const data = localStorage.getItem("users");
        if (data){
            JSON.parse(data);
        }
    }, [])

    useEffect(() =>{
        localStorage.setItem("users", JSON.stringify(user))
    })

    return(
        
        <div className="login py-5">
            {!user ? (
                <button onClick={googleSignIn} type="button" className="btn btn-dark mx-3 my-5 modal__btn1" data-toggle="modal" data-target="#signUpModal">
                    Sign In With Google
                </button>
            ) : (
                <button onClick={signOut} type="button" className="btn btn-dark mx-3 my-5 modal__btn2" data-toggle="modal" data-target="#logInModal">
                    Sign Out
                </button>
            )}   
        </div>
            
    )
}

export default Login;