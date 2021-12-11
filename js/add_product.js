const product = new ProductsController()

product.addProduct("Set Blue1",19.5,"Soft and smooth fabric with bow tie1","http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif","Set");
product.addProduct("Set Blue2",20.5,"Soft and smooth fabric with bow tie2","http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif","Set");
product.addProduct("Dress Red1",21.5,"Soft and smooth fabric","http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif","Dress");
product.addProduct("Dress Red2",5.5,"Soft and smooth fabric","http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif","Dress");
product.addProduct("Jean Blue1",61.5,"Soft and smooth fabric","http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif","Jeans");
product.addProduct("Jean Blue2",55.5,"Soft and smooth fabric","http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif","Jeans");
product.addProduct("Tops Blue1",99.5,"Soft and smooth fabric","http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif","Tops");
product.addProduct("Tops Blue2",73.5,"Soft and smooth fabric","http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif","Tops");

product.displayProduct(``, ``);

function displayProductFn(filter1, filter2)
{
    product.displayProduct(filter1, filter2);
}