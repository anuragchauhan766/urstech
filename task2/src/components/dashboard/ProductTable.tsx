"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { productData } from "@/lib/dummy-data";
import Image from "next/image";

export function ProductTable() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Products</h2>
        <Button>+ Add Product</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Sell</TableHead>
            <TableHead>View</TableHead>
            <TableHead>Earning</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productData.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Image src={product.image} alt={product.name} className="h-10 w-10 object-cover" />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.status}</TableCell>
              <TableCell>{product.sell}</TableCell>
              <TableCell>{product.view}</TableCell>
              <TableCell>${product.earning.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
