class ProductsController{
    constructor(){
        this.clothingItems = [];
    }
    //end of constructor
    addProduct(name,price,description,imagesrc,category){
        const item = {
            id: `${category}.${this.clothingItems.length-1}`,
            name: name,
            price: price,
            description: description,
            imagesrc: imagesrc,
            category: category
        }
        this.clothingItems.push(item);
    } //end of addProduct

    displayProduct(filter1, filter2)
    {
        // this method to create different html elements with different id
        let htmlElement = "";
        let index = 0;
        let priceSort = [];
        let filtered = [];

        // This to filter products based on Dress, Sets etc
        filtered = this.clothingItems.filter(item => {
            if(filter1)
            {
                return item.category == filter1;
            }
            else
            {
                return item.category != "";
            }
        });

        if(filter2 == `HighestPrice`)
        {
            priceSort =  filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        }
        else
        if(filter2 == `LowestPrice`)
        {
            priceSort =  filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        }
 
        filtered.forEach(item => {
            htmlElement += createHTMLElements(item, index);
            index++;
        });

        document.querySelector(".row").innerHTML = htmlElement;

        if(filter1)
        {
            document.querySelector("#selectionHeading").innerText = "Our " + filter1 + " Selections";
        }
        else
        {
            document.querySelector("#selectionHeading").innerText = "All Our Selections";
        }

        jQuery('button').click( function(e) {
            jQuery('.collapse').collapse('hide');
        });

        // create click event listener for all the buttons in product cards
        index = 0;
        filtered.forEach(item => {
            document.getElementById(index).addEventListener("click", function() {displayProductDetails(item);});
            index++;
        });
    }
    // End of displayProduct

}


const createHTMLElements = (item, index) => `
    <div class="col-sm-12 col-lg-6 ">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-body">
                <img class="card-img-top" src=${item.imagesrc} alt=${item.description}>
                <h5 class="card-title products-card-title">${item.name}</h3>
                <h5 class="card-pricing">S$${item.price}</h5>
                <a id=${index} href="#" class="btn btn-primary" data-toggle="modal" data-target="#productModal">Find out more</a>
            </div>
        </div>
    </div>
`


// below function will display info in each modal dynamically
const displayProductDetails = item => {
    document.querySelector("#modalName").innerText = item.name;
    document.querySelector("#modalDescription").innerText = item.description;
    document.querySelector("#modalPrice").innerText = "S$" + item.price;
    document.querySelector("#modalImg").src = item.imagesrc;
}
