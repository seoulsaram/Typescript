{
  //Capitalize : Convert first character of string literal type to uppercase
  type Product = 'cat' | 'dog';
  type NewProduct = Capitalize<Product>; //'Cat' | 'Dog' ;
  const animal: NewProduct = 'Cat';
}
