import React, { useEffect, useState } from "react";

const useResturantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.7160827&lng=72.7717775&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const json = await menuData?.json();
    console.log("fetched data", json);
    setMenu(json?.data);
  };
  return menu;
};

export default useResturantMenu;
