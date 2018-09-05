import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ExpensifyAppRouters, { history } from "./routes/ExpensifyAppRouters";
import configureStore from "./store/configStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./actions/authentication";
import LoadingPage from "./components/LoadingPage";
//import "./playground/promise";
console.log("testing");
const store = configureStore();
console.log("testing");

const jsx = (
    <Provider store={store}>
        <ExpensifyAppRouters />
    </Provider>
);

let hasRender = false;
const renderApp = () => {
    if (!hasRender) {
        ReactDOM.render(jsx, document.getElementById("app"));
        hasRender = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById("app"));


firebase.auth().onAuthStateChanged((user) => {
    
    if (user) {
        store.dispatch(login(user.uid)); //first store user id to the state
        renderApp();
        if(history.location.pathname === "/"){ //check if we are in login page
            history.push("/dashboard");
        }
    } else {
        console.log("log out");
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
}) 

