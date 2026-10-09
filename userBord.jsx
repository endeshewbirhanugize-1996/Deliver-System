import { useEffect, useState } from "react";
import axios from "axios";
const UserBord = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async ()=>{
      try {
        const res=await axios.get("http://localhost:3001/users");
        console.log("API RESPONSE:", res.data);
        if (Array.isArray(res.data)){
          setProducts(res.data);
        } else if (Array.isArray(res.data.users)) {
          setProducts(res.data.users);
        } 
        else{
          setProducts([]);
        }
      } catch (error) {
        console.log("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  const totalProducts=products.length;
  const totalMoney =products.reduce((total, product) => {
    return total + Number(product.money||0);
  }, 0);
  if (loading){
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100">
      {/* NAVBAR */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          MyShop
        </h1>
        <div className="flex gap-6 text-gray-600">
          <span className="cursor-pointer hover:text-blue-600">
            Dashboard
          </span>
          <span className="cursor-pointer hover:text-blue-600">
            Products
          </span>
          <span className="cursor-pointer hover:text-blue-600">
            Orders
          </span>
        </div>
      </nav>
      {/* MAIN */}
      <main className="p-6 md:p-10">
        {/* TITLE */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            E-Commerce Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Manage your products and sales
          </p>
        </div>
        {/*STAT CARDS*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* PRODUCTS */}
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">
              Total Products
            </p>
            <h2 className="text-3xl font-bold mt-2">
              {totalProducts}
            </h2>
          </div>
          {/* REVENUE */}
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">
              Total Revenue
            </p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">
              {totalMoney.toLocaleString()} ETB
            </h2>
          </div>
          {/* ORDERS */}
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-500">
              Total Orders
            </p>
            <h2 className="text-3xl font-bold mt-2">
              0
            </h2>
          </div>
        </div>
        {/* PRODUCTS TITLE */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Products
            </h2>
            <p className="text-gray-500">
              Available products
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
            + Add Product
          </button>
        </div>
        {/* PRODUCT CARDS */}
        {products.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-10 text-center">
            <p className="text-gray-500">
              No products found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => {
              const file = product.file;
              const isImage =
                file?.mimeType?.startsWith("image/");
              return (
                <div
                  key={product._id || index}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  {/* IMAGE */}
                  <div className="h-56 bg-gray-100 flex items-center justify-center">
                    {isImage ? (
                      <img
                        src={`http://localhost:3001/uploads/${file.storedName}`}
                        alt={file.originalName || "Product"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>
                  {/* PRODUCT INFO */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800">
                      {product.filename||
                        file?.originalName ||
                        "Product"}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">
                      {file?.originalName||"No file"}
                    </p>
                    {/* PRICE */}
                    <div className="flex justify-between items-center mt-5">
                      <span className="text-xl font-bold text-green-600">
                        {Number(
                          product.money || 0
                        ).toLocaleString()}{" "}
                        ETB
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                        Available
                      </span>
                    </div>
                    {/*BUTTON*/}
                    <button className="w-full mt-5 bg-blue-600 
                    hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                      View Product
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};
export default UserBord;