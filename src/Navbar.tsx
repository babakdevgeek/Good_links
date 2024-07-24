import Dropdown from "./components/dropdown/Dropdown";
import DropdownItem from "./components/dropdown/DropdownItem";
import DropdownMenu from "./components/dropdown/DropdownMenu";
import DropdownTrigger from "./components/dropdown/DropdownTrigger";
import { categories } from "./constants";
// import { links } from "./constants";

export default function Sidebar() {
  return (
    <header
      className="md:h-dvh flex justify-between items-center gap-4 md:block h-auto  overflow-y-visible 
    md:overflow-y-auto w-full md:w-3/12 px-10 py-5  hidescrollbar md:border-2 md:border-r-good-links-purple"
    >
      <div className="flex flex-col gap-1 md:mb-10">
        <h1 className="text-4xl text-good-links-purple">Good links</h1>
        <p className="text-xs text-center">Good links from the internet</p>
      </div>
      <nav>
        <ul>
          <li>
            <Dropdown>
              <DropdownTrigger>
                <button className="flex gap-3">Categories</button>
              </DropdownTrigger>
              <DropdownMenu>
                {categories.map((c) => (
                  <DropdownItem key={c}>
                    <a href="#" className="block">
                      {c}
                    </a>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
}
