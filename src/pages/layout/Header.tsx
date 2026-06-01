import HeaderQuickMenu from "@/components/HeaderQuickMenu";
  interface HeaderProps {
  visible:boolean;
}

const Header = ({ visible }:HeaderProps) => {
  return (
    <header
      id="header"
      className={`
       fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full 
        transition-all duration-500
        
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }
      `}
    >
      <HeaderQuickMenu />
    </header>
  );
};

export default Header;
