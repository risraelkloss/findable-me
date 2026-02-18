import { ProductHero } from "@/components/product/ProductHero";
import { ProductFeatures } from "@/components/product/ProductFeatures";
import { ProductRevenueFit } from "@/components/product/ProductRevenueFit";
import { ProductCTA } from "@/components/product/ProductCTA";

export default function BlueChimpProductPage() {
  return (
    <>
      <ProductHero />
      <ProductFeatures />
      <ProductRevenueFit />
      <ProductCTA />
    </>
  );
}
