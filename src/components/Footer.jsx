const Footer = () => {
  return (
    <footer className="bg-base-300 py-8 h-14">
      <div className="footer sm:footer-horizontal footer-center text-base-content w-11/12 lg:w-4/5 h-full mx-auto flex flex-col justify-center">
        <aside>
          <p className="text-xs md:text-base font-light">
            Copyright © {new Date().getFullYear()} - All right reserved by Hot
            Coffee Ltd.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
