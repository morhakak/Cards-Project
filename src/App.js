import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayOut from "./layOut/main/LayOut";
import Router from "./routers/Router";
import ThemeProvider from "./provider/ThemeProvider";
import SnackbarProvider from "./provider/SnackbarProvider";
import UserProvider from "./users/providers/UserProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <SnackbarProvider>
          <UserProvider>
            <ThemeProvider>
              <LayOut>
                <Router />
              </LayOut>
            </ThemeProvider>
          </UserProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
