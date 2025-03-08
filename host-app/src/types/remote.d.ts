declare module 'products/ProductsPage' {
    import { ReactNode } from 'react';
    
    interface ProductsPageProps {
        children?: ReactNode;
    }
    
    const ProductsPage: React.FC<ProductsPageProps>;
    export default ProductsPage;
}