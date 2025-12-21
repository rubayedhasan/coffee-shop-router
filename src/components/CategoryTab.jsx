import { NavLink, useLoaderData } from "react-router";

const CategoryTab = () => {
  const coffeeCategory = useLoaderData();

  return (
    <div className="mt-10 lg:mt-12 flex justify-center">
      <div
        role="tablist"
        className="tabs tabs-border flex-nowrap gap-0 md:gap-12 lg:gap-14"
      >
        {coffeeCategory.map((coffeeCategory) => (
          <NavLink
            to={`/category/${coffeeCategory.category}`}
            key={coffeeCategory.id}
            role="tab"
            className={({ isActive }) =>
              `tab text-sm md:text-base lg:text-lg font-medium text-[#222222] ${
                isActive ? "tab-active cf-text-primary font-bold" : ""
              }`
            }
          >
            {coffeeCategory.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryTab;
