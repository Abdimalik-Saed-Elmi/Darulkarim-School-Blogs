// src/components/Footer.jsx

function Footer() {
  return (
    <footer className="bg-blue-300 text-black py-8 border-t-2 border-solid border-gray-300">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Darulkarim. All Rights Reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;