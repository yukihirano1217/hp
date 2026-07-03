// アプリのルーティングを設定するファイル

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TopPage } from '././Pages/TopPage';
import { IntroductionPage } from './Pages/IntroductionPage';
import { CEOPage } from './Pages/CEOPage';
import { BusinessPage } from './Pages/BusinessPage';
import { RecruitPage } from './Pages/RecruitPage';
import HeroImage from './Pages/HeroImage';
import SlidePage from './Pages/SlidePage';
import Hover from './Pages/Hover';
import { ContactPage } from './Pages/ContactPage';


const router = createBrowserRouter([
 {
  path: '/',
  element: <TopPage />
 },
 {
  path: '/introduction',
  element: <IntroductionPage />
 },
 {
  path: '/CEO',
  element: <CEOPage />
 },
 {
  path: '/business',
  element: <BusinessPage />
 },
 {
  path: '/recruit',
  element: <RecruitPage />
 },
 {
  path: '/slide',
  element: <SlidePage />
 },
 {
  path: '/hero',
  element: <HeroImage />
 },
 {
  path: '/hover',
  element: <Hover />
 },
  {
  path: '/contact',
  element: <ContactPage />
 },
],
 {
  // future: {
  // v7_fetcherPersist: true,
  // v7_normalizeFormMethod: true,
  // v7_partialHydration: true,
  // v7_relativeSplatPath: true,
  // v7_skipActionErrorRevalidation: true,
  // v7_startTransition: true, // この行を追加
  // },
  basename: '/hp',
 });


const App = () => {


 return (
  <RouterProvider router={router} />
 );
};

export default App
