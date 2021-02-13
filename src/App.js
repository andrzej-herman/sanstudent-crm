import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import Login from "./pages/Login";
import PrivateRoute from "./redux/PrivateRoute";
import "./assets/scss/theme.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Dashboard} />
        <Route path="/groups" exact component={Groups} />
      </Switch>
    </Router>
  );
};

export default App;

// ! ----------------------------------------------------------------------------

// // layouts
// import VerticalLayout from "./components/VerticalLayout/";
// import HorizontalLayout from "./components/HorizontalLayout/";
// import NonAuthLayout from "./components/NonAuthLayout";

// // Import scss
// import "./assets/scss/theme.scss";

//   /**
//    * Returns the layout
//    */
//   getLayout = () => {
//     let layoutCls = VerticalLayout;

//     switch (this.props.layout.layoutType) {
//       case "horizontal":
//         layoutCls = HorizontalLayout;
//         break;
//       default:
//         layoutCls = VerticalLayout;
//         break;
//     }
//     return layoutCls;
//   };

//   render() {
//     const Layout = this.getLayout();

//     return (
//       <React.Fragment>
//         <Router>
//           <Switch>
//             {publicRoutes.map((route, idx) => (
//               <AppRoute
//                 path={route.path}
//                 layout={NonAuthLayout}
//                 component={route.component}
//                 key={idx}
//                 isAuthProtected={false}
//               />
//             ))}

//             {authProtectedRoutes.map((route, idx) => (
//               <AppRoute
//                 path={route.path}
//                 layout={Layout}
//                 component={route.component}
//                 key={idx}
//                 isAuthProtected={true}
//               />
//             ))}
//           </Switch>
//         </Router>
//       </React.Fragment>
//     );
//   }
// }
