import Image from "next/image";

const Cart = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-12">
      {/* Heading */}
      <h1 className="mb-8 text-4xl text-indigo-950 font-['clash_display'] leading-10 ">Your shopping cart</h1>

      {/* Table */}
      <div className="border-b border-gray-200 pb-8">
        <div className="grid grid-cols-6 items-center text-sm font-['clash display'] text-indigo-950 uppercase leading-tight">
          <span className="col-span-3">Product</span>
          <span className="text-center">Quantity</span>
          <span className="text-right">Total</span>
        </div>

        {/* Product 1 */}
        <div className="grid grid-cols-6 items-center py-6 border-t border-gray-200">
          <div className="flex col-span-3 gap-4">
            <Image
              src="/images/Product Image.png"
              alt="Graystone Vase"
              width={80}
              height={80}
              className="object-cover"
            />
            <div>
              <h2 className="font-['clash display'] text-xl leading-7 text-indigo-950">Graystone vase</h2>
              <p className="text-sm text-indigo-950 font-['satoshi'] leading-tight">
                A timeless ceramic vase with a tri-color gray glaze.
              </p>
              <p className="mt-1 text-indigo-950 text-lg font-['satoshi'] leading-normal">£85</p>
            </div>
          </div>
          <div className="text-center text-indigo-950 font-['satoshi']">1</div>
          <div className="text-right font-['satoshi]  text-indigo-950 leading-relaxed">£85</div>
        </div>

        {/* Product 2 */}
        <div className="grid grid-cols-6 items-center py-6 border-t border-gray-200">
          <div className="flex col-span-3 gap-4">
            <Image
              src="/images/Product Image 2.png"
              alt="Basic White Vase"
              width={80}
              height={80}
              className="object-cover"
            />
            <div>
              <h2 className="font-['clash display'] text-xl leading-7 text-indigo-950">Basic white vase</h2>
              <p className="text-sm text-indigo-950 font-['satoshi'] leading-tight">
                Beautiful and simple, this is one for the classics.
              </p>
              <p className="mt-1 text-indigo-950 text-lg font-['satoshi'] leading-normal">£125</p>
            </div>
          </div>
          <div className="text-center text-indigo-950 font-['satoshi']">1</div>
          <div className="text-right font-['satoshi]  text-indigo-950 leading-relaxed">£125</div>
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex justify-end mt-6 text-right">
        <div>
          <p className="text-xl text-indigo-800 font-['clash display] leading-7">
            Subtotal <span className="ml-6 text-indigo-950 text-2xl font-['clash display'] leading-loose">£210</span>
          </p>
          <p className="text-sm text-indigo-800 mt-1 fony-['satoshi'] leading-tight">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="bg-indigo-950 text-white font-['satoshi'] leading-normal py-3 px-6 mt-4 hover:bg-indigo-700">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
