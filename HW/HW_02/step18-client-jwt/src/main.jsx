import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './pages/board/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import SaveForm from './pages/board/SaveForm.jsx'
import Detail from './pages/board/Detail.jsx'
import UpdateForm from './pages/board/UpdateForm.jsx'
import LoginForm from './pages/user/LoginForm.jsx'
import JoinForm from './pages/user/JoinForm.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />, // 레이아웃 (Header + Footer +Outlet)
  errorElement: <NotFound />, // 에러(없는 경로 등) 기본 처리
  children: [
    {index: true, element: <Home />},
    {path: 'saveForm', element: <SaveForm/>,},
    {path: 'board/:id', element: <Detail/>,},
    {path: 'updateForm/:id', element: <UpdateForm/>,},
    {path: 'loginForm', element: <LoginForm/>,},
    {path: 'joinForm', element: <JoinForm/>,},
    {path: '*', element: <NotFound />,/* 나머지 모든 서브 경로 처리 */},
  ],
},
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);