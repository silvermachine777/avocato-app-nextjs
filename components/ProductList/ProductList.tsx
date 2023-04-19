import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={{
          children: (Component, props) => <Component {...props} />,
          src: image,
          width: 333,
          height: 333,
          alt: "",
        }}
        meta={{
          children: (Component, props) => (
            <Component {...props} style={{ color: 'dimgray' }}>
              {price}
            </Component>
          ),
        }}
      />
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
