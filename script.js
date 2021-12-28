let getData = async () => {
  try {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let output = "";
        data.forEach((user) => {
          output += `<li> Brand:${user.brand}  <br> 
                            Product: ${user.name}   <br>  
                            Price: ${user.price} ${user.price_sign}<br>
                            Description: ${user.description}<br>
                            <a href="user.product_link">
<img src= user.image_link  style="width:42px;height:42px;">
</a>
</li> `;
        });
        document.getElementById("output").innerHTML = output;
      });
  } catch (err) {
    document.getElementById("output").innerHTML = err;
  }
};

document.getElementById("btn").addEventListener("click", getData);
