import Serializer from "./serializer";

class ProductSerializer extends Serializer {
  public serializeProduct(product: any) {
    return {
      // id: product._id,
      name: product.name,
      category: product.category,
      cost: product.cost,
      mrp: product.mrp,
      stock: product.stock,
      createdAt: product.createdAt,
      // updatedAt: product.updatedAt
    }
  }

  public serializeProducts(products: Array<any>) {
    return products.map(product => this.serializeProduct(product))
  }
}

export default ProductSerializer