// components/Footer.js

export default function Footer() {
    return (
      <footer className="bg-black text-gray-300 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: Need Help */}
          <div>
            <h2 className="text-orange-500 text-lg font-semibold mb-4">Need Help?</h2>
            <p>Call us: <span className="font-bold">09638090000</span></p>
            <p>Email us: <span className="font-bold">cc.believerssign@gmail.com</span></p>
            <p>Shop Address: Shop-3/1, Eastern Plaza, Hatirpool, Dhaka, Bangladesh</p>
            {/* Social Icons */}
            <div className="flex mt-4 space-x-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
            </div>
          </div>
  
          {/* Center Section: Customer Account */}
          <div>
            <h2 className="text-orange-500 text-lg font-semibold mb-4">Customers Account</h2>
            <ul className="space-y-2">
              <li>Sign in</li>
              <li>Create New Account</li>
              <li>My Orders</li>
              <li>Join as an Affiliate Partner</li>
              <li>Complain Box</li>
            </ul>
          </div>
  
          {/* Right Section: Related Pages */}
          <div>
            <h2 className="text-orange-500 text-lg font-semibold mb-4">Related Pages</h2>
            <ul className="space-y-2">
              <li>Refund & Returned</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Our Showrooms</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>© 2024 BELIEVERS SIGN | Powered by <span className="text-green-500">STOREX</span></p>
        </div>
      </footer>
    );
  }
  