import menu from "@/config/menu.json";

const Navigation = () => {
  return (
    <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
        >
          {menu.main.map((menu, i) => (
            <li>{menu.name}</li>
          ))}
    </ul>
  )
}

export default Navigation