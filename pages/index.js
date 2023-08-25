import Layout from '@/components/Layout';
import ProductItems from '@/components/ProductItems';
import data from '@/utils/data';
export default function Home() {
  return (
    <>
      <Layout title={'Home page'}>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {data.products.map((product) => (
            <ProductItems product={product} key={product.slug} />
          ))}
        </div>
      </Layout>
    </>
  );
}
