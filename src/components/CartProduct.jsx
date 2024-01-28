import { MinusSmallIcon, PlusSmallIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function CartProduct({ product }) {
  const { setItemQuantity, removeItem } = useShoppingCart();

  return (
    <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2 hover:shadow-md hover:border-opacity-50 border border-opacity-0 rounded-md p-2 bg-white">
      <Link href={`/products/${product.id}`} className="flex items-center group">
        <div className="relative w-12 h-12 group-hover:scale-110 transition-transform">
          <Image src={product.image} alt={product.name} fill sizes="100%" />
        </div>
        <p className="font-semibold text-sm sm:text-base group-hover:underline ml-2 sm:ml-0">{product.name}</p>
      </Link>
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <button
            disabled={product.quantity <= 1}
            className="p-1 rounded-md hover:bg-rose-100 hover:text-rose-500"
            onClick={() => setItemQuantity(product.id, product.quantity - 1)}
          >
            <MinusSmallIcon className="w-4 h-4 flex-shrink-0" />
          </button>
          <p className="font-semibold text-sm sm:text-base">{product.quantity}</p>
          <button
            className="p-1 rounded-md hover:bg-green-100 hover:text-green-500"
            onClick={() => setItemQuantity(product.id, product.quantity + 1)}
          >
            <PlusSmallIcon className="w-4 h-4 flex-shrink-0" />
          </button>
        </div>
        <p className="text-sm font-semibold mt-1 sm:mt-0">
          <XMarkIcon className="w-3 h-3 text-gray-500 mr-1 mb-1 inline-block" />
          {product.formattedPrice}
        </p>
        <button onClick={() => removeItem(product.id)} className="ml-2 mt-1 sm:mt-0 hover:text-red-500">
          <XCircleIcon className="w-5 h-5 flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  );
}
