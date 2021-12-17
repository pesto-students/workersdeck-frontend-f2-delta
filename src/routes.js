import { Navigate,Outlet } from 'react-router-dom';

const routes = (isLoggedIn) => [
  {
    path: '/checkout',
    element: isLoggedIn ? <MyProfile /> : <Navigate to="/login" />,
    children: [
      { path: '/select-address', element: <SelectAddress /> },
      { path: '/new-address', element: <NewAddress /> },
      { path: '/avaibility', element: <Booking /> },
      { path: '/preview', element: <BookingConfirmation /> },
      { path: '/booked', element: <ThankYou/>},
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <MainLayout /> : <Navigate to="/app/dashboard" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;