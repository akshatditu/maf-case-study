function SideNav() {
  return (
    <div className="bg-gray-800 w-56">
      <div className="flex items-center justify-center h-16 text-white">
        Logo
      </div>
      <ul className="mt-6">
        <li className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
          Dashboard
        </li>
        <li className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
          Analytics
        </li>
        <li className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
          Settings
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
