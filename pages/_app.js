import "../styles/globals.css";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";


import Navbar from "../components/navbar/navbar";
import Cookie from "js-cookie";
import { initializeStore } from "../redux/store";
import cookieServer from "cookie";




MyApp.getInitialProps= async ({ctx})=> {
  const req=ctx.req
 const reduxStore = initializeStore();
 const { dispatch } = reduxStore;


 const cookies =  cookieServer.parse(req ? req.headers.cookie || "" : document.cookie);

 dispatch({
   type: "ADD_USER",
   payload: JSON.parse(cookies.currentUser),
 });


 console.log("alooooooooooooooooooooooooooooooooo")

 return {
   pageProps: { initialReduxState: reduxStore.getState() } 
  } // will be passed to the page component as props
 
}






function MyApp({ Component, pageProps }) {
  console.log("page props",pageProps)
  const store = useStore(pageProps.initialReduxState);
  
  return (
    <Provider store={store}>
      <Navbar {...pageProps} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

