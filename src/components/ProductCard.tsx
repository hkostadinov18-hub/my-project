import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {product.image ? (
        <div className="relative h-32 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, 25vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex h-32 items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100 text-5xl">
          {product.emoji}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-amber-600">
          {product.category}
        </span>
        <h3 className="font-serif text-lg font-bold text-amber-950">{product.name}</h3>
        <p className="flex-1 text-sm text-amber-900/70">{product.description}</p>
        <div className="mt-2 flex items-end justify-between border-t border-amber-100 pt-3">
          <div>
            <p className="text-xs text-amber-900/60">На дребно</p>
            <p className="text-lg font-bold text-amber-800">
              {product.retailPrice.toFixed(2)} € / {product.unit}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-amber-900/60">На едро от {product.wholesaleMinQty} бр.</p>
            <p className="text-sm font-semibold text-orange-700">
              {product.wholesalePrice.toFixed(2)} € / {product.unit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
