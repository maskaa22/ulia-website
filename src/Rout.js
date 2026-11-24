
import {Route, Routes, useLocation} from "react-router-dom";
import Main from "./components/main/Main";
import Books from "./components/books/Books";
import AboutMy from "./components/about_my/AboutMy";
import Poems from "./components/poems/Poems";
import Galarys from "./components/galary/Galarys";
import Logining from "./components/logining/Logining";
import BookItemForRead from "./components/book/BookItemForRead";
import Comments from '../src/components/comments/Comments';
import React, { useEffect } from 'react';
import NotFound from "./components/not_found/NotFound";

function Rout() {

  const { pathname, hash } = useLocation();

  // scroll to top on page change, or to the #anchor if the link has one
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  // const [comment, setComment] = useState([]);

  // useEffect(() => {
  //   getComments().then(comment => {
  //     setComment(comment)
  //     })
  // }, []);

  return (
  <main className={'main'}>
  <div className={'page'} key={pathname}>
  <Routes>
    <Route path={'/'} element={<Main />} />
    <Route path={'/about_me'} element={<AboutMy />} />
    <Route path={'/poems'} element={<Poems/>} />
    <Route path={'/books'} element={<Books/>} />
    <Route path={'/galarys'} element={<Galarys />} />
    <Route path={'/login'} element={<Logining />} />
    <Route path={'/registration'} element={<Logining />} />
    <Route path={'/book/:id'} element={<BookItemForRead />} />
    <Route path={'/comments'} element={<Comments/>} />
    <Route path={'*'} element={<NotFound />} />


    {/* {(isAuth && role === WORLD_ADMIN) &&
      <Route path={'/admin'}
        element={<AdminHomePage setUsers={setUsers} setDelUser={setDelUser} delUser={delUser} />}>
        <Route index element={<Edit userForEdit={userForEdit} />} />
        <Route path={'users'} element={<Users items={users} setDelUser={setDelUser} />} />
        <Route path={'records'} element={<Records />} />
        <Route path={'products'} element={<CreateProduct />} />
        <Route path={'orders'} element={<Orders />} />
        <Route path={'archive_orders'} element={<ArchiveOrders />} />
        <Route path={'analysis'} element={<Analysis />} />
      </Route>
    }
    {isAuth && <Route path={'/products/orders'} element={<BasketPage />} />}
    {(isAuth && role === WORLD_USER) && <Route path={CLIENT_ALL} element={<ClientHomePage currentUser={currentUser} />} />}

    <Route path={'/registration'} element={isAuth ? <Navigate to={'/'} /> : <LoginingForm />} />
    <Route path={'/login'} element={isAuth ? <Navigate to={'/'} /> : <LoginingForm />} />
    <Route path={'/:user_id/reset-password'} element={<ResetPasswordForm />} />
    <Route path={'/login-reset-password'} element={<WritingEmailForm />} />
    <Route path={'auth/activate/:token'} element={<ActiveForm />} /> */}
  </Routes>
  </div>
  </main>
  );
}
export default Rout;