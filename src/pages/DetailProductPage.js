import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function DetailProductPage({data}) {
    const id = useParams()
  

  return (
    <div>
      <h1>ini halaman Detail Produk {id.id}</h1>
      <h1>ini halaman Detail Produk </h1>
    </div>
  );
}

export default DetailProductPage;
