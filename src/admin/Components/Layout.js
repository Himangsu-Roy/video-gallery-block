import { Outlet, Link, useLocation } from "react-router-dom";

import Header from "../../../../bpl-tools/Admin/Header/Header";

const Layout = (props) => {
  const { isPremium } = props;
  const location = useLocation();

  // const navigation = [
  //   { name: "Welcome", href: "/welcome" },
  //   // { name: "Demos", href: "/demos" },
  //   isPremium ? { name: "Demos", href: "/filter-demos" } : null,
  //   isPremium ? null : { name: "Pro Version Demo", href: "/filter-demos" },
  //   { name: "Pricing", href: "/pricing" },
  //   // { name: "Purchase", href: "/purchase" },
  //   // { name: "Feature Comparison", href: "/feature-comparison" },
  // ];

  const navigation = [
    { name: "Welcome", href: "/welcome" },
    isPremium
      ? { name: "Demos", href: "/filter-demos" } // premium: show Demos
      : { name: "Pro Version Demo", href: "/filter-demos" }, // non-premium: show Pro Version Demo
    !isPremium && { name: "Pricing", href: "/pricing" }, // hide Pricing for premium
  ].filter(Boolean); // removes any false / null items

  return (
    <div className="bPlDashboard">
      <Header {...props}>
        <nav className="bPlDashboardNav">
          {/* {navigation
            ?.filter(
              (item) =>
                !isPremium ||
                ![
                  "/purchase",
                  "/pricing",
                  "/feature-comparison",
                  "/filter-demos",
                ].includes(item?.href)
            ) // Hide link for premium users
            ?.map(
              (item, index) => (
                console.log(item?.name, "name"),
                (
                  <Link
                    key={index}
                    to={item?.href}
                    className={`navLink ${
                      location.pathname === item?.href ? "active" : ""
                    }`}
                    style={{
                      display: !item?.name ? "none" : "block",
                    }}>
                    {item?.name}
                  </Link>
                )
              )
            )} */}

          {navigation.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`navLink ${
                location.pathname === item.href ? "active" : ""
              }`}>
              {item.name}
            </Link>
          ))}
        </nav>
      </Header>

      <main className="bPlDashboardMain">
        <div className="bPlDashboardContainer">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Layout;
