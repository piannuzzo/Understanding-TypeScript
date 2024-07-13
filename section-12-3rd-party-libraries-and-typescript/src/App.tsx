import React from 'react'
import 'reflect-metadata'
import { plainToInstance } from 'class-transformer'

import Test from './components/Test'
import LodashTest from './components/LodashTest'
import { Product } from './components/Product'

const cL = console.log

LodashTest()

const products = [
	{ title: 'Hammer', price: 12.99 },
	{ title: 'Tape Measure', price: 11.99}
]
const loadedProducts = products.map(product => new Product(product.title, product.price))
// const loadedProducts = plainToInstance(Product, products)
for (const product of loadedProducts) {
	cL(product.getInformation())
}

function App() {
	return (
		<div>
			<header>Section XII : 3rd Party Libraries & TypeScript</header>
			<Test />
		</div>
	)
}

export default App