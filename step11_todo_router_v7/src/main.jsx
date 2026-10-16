import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx'
import User from './pages/User.jsx'
import Admin from './pages/Admin.jsx'
import Manager from './pages/Manager.jsx'
import AdminLayout from './pages/AdminLayout.jsx';

// Router 설계
const router = createBrowserRouter([
  {
    path: '/', // 접속 요청이 들어옴
    element: <App />, // 정상 응답 결과인 App을 보여줌
    errorElement: <NotFound />, // 잘못된 접근이면 NotFound를 보여줌
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'user/:id', // :가 있어야 param으로 넘어온 id값을 추적함.
        // user/(param)으로 들어온 요청은 전부 user페이지로 넘어갈 수 있게됨.
        element:<User/>
      },
      {
        path:'admin',
        element:<AdminLayout/>,
        children:[
          {
            index:true,
            element:<Admin/>,
          },
          {
            path:'manager',
            element:<Manager/>,
          }
        ]
      },
      {
        path:'*',
        element:<NotFound/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
