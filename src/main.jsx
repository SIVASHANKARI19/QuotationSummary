import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import routes from './Routes.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    {routes.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}
    </Routes>
    </BrowserRouter>
  </Provider>
)
