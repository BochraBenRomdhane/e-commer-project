$(document).ready(function () {
    const products = [
        { name: "Reusable Bottle", price: 20, image: "https://oceanbottle.co/cdn/shop/products/OceanBottle_OG_Front_Ocean-Blue_2048px.jpg?v=1653562177&width=533" },
        { name: "Reusable Tote Bag", price: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYyfSKutihnLLD9cIdwbFFD3wt4z1Ow7J2b7rIKUXHys0kkl0Gg0x0bQwlb70iAi39Fk&usqp=CAU" },
        { name: "ToothBrush", price: 50, image: "https://m.media-amazon.com/images/I/51JWmpoOGsL._AC_.jpg" },
        { name: "100% Organic Cotton Towels", price: 66.95, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkQ_pu0cqgzjnLEFgJR7u-tKgQJvBR54QjJMwL2UUiGq5ii6lv0XnwFegzBKRXFduQqU&usqp=CAU" },
        { name: "Beeswax Food Wraps", price: 11.50, image: "https://m.media-amazon.com/images/I/81DSNOB7eiL._AC_UF894,1000_QL80_.jpg" },
        { name: "Manna Hydration Bottle", price: 30, image: "https://mannahydration.com/cdn/shop/files/26310_03_1445x.jpg?v=1683822933" }
    ];
    $(".btn").click(function () {
        window.location.href = "index2.html"
    })
    // Display products
    products.forEach(product => {
        $('#products').append(`
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="addcart" name="${product.name}" data-price="${product.price}">Add to Cart</button>
                <button class="cancel" name="${product.name}" data-price="${product.price}">cancel</button>
            </div>
        `);
    });
    var total = 0;
    $(".addcart").click(function () {
        const price = parseFloat($(this).data("price"));
        total += price;
        $(".add").text(total.toFixed(2));
    })

    $(".cart").click(function () {
        if (total === 0) {
            alert("Buy one thing to save the word")
        } else {
            alert("🎉 Checkout Success: " + total + " thank you for saving the word ")
            $(".add").text(total.toFixed(2))
        }
    })
    $(".cancel").click(function () {
        const price = parseFloat($(this).data("price"));
        if (total -= price > 0) {
            total = 0
            $(".add").text(total.toFixed(2))
            alert("You will abandon the product");
        } else {
            $(".add").text(total.toFixed(2));
            alert("You will abandon the product");
        }
    })
})



