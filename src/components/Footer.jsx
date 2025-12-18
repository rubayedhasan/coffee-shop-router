const Footer = () => {
  return (
    <footer className="bg-base-300 p-4 h-14">
      <div className="footer sm:footer-horizontal footer-center text-base-content w-11/12 lg:w-4/5 h-full mx-auto">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Hot
            Coffee Ltd.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
