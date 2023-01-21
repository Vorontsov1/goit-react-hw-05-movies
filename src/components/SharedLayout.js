import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import Loading from './Loading/Loading';



const SharedLayout = () => {
    return (
        <div>
            <AppBar />
         <main>
         <Suspense fallback={<Loading />}>
         <Outlet />
         </Suspense>
         </main>
        </div>
    );
};

export default SharedLayout;