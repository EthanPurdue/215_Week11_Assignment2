//hide the information box, we don't want to show it until we need it
$(".informationBox").hide();

const establishIndexAndNames = (index) => {
    console.log(cocktails[index].name);
    $(".drinkName").eq(index).text(cocktails[index].name);
    $(".details").eq(index).text("Key Ingredient: " + cocktails[index].primaryIngredient);
};
  
const showInformation = () => {
    createDrinkBoxes();

    //now that all the boxes are created, we can access the first and last once according to index to change style
    $(".drinkBox").first().css("border-top-left-radius", "15px");
    $(".drinkBox").first().css("border-top-right-radius", "15px");

    $(".drinkBox").last().css("border-bottom-left-radius", "15px");
    $(".drinkBox").last().css("border-bottom-right-radius", "15px");


    jQuery.each($(".drinkBox"), establishIndexAndNames);
  

    // when we click we want to see the calories
    $(".drinkBox").on("click", function () {
        let drinkIndex = $(".drinkBox").index(this);
        $(".informationBox").find("p.details").text("Calories: " + cocktails[drinkIndex].calories);
        $(this).find(".cocktailPicture").css("border", "10px solid #2E8B0C")

    });
  
    // when we hover we want to see the ingredients for the drink
    $(".drinkBox").on("mouseover", function () {
        let drinkIndex = $(".drinkBox").index(this);
        $(this).find(".drinkName").css("color", "#F00F24")
        $(this).find(".details").css("color", "#F00F24")
        $(this).css("background-color", "#FBDF4B")
        $(this).find(".cocktailPicture").css("border", "10px dashed #2E8B0C")
        $(".informationBox").find("p.details").text("All Ingredeints: " + cocktails[drinkIndex].ingredients);
    });
  
    // when we mouse out we want to set the drinKBox p content back to its default which is name
    $(".drinkBox").on("mouseout", function () {
        $(this).find(".drinkName").css("color", "black")
        $(this).css("background-color", "#DDBA00")
        $(this).find(".details").css("color", "black")
        $(this).find(".cocktailPicture").css("border", "10px dotted #2E8B0C")
        $(".informationBox").find("p.details").text("");
    });
  
};
  

const createDrinkBoxes = ()=> {
    let wrapperRef = $('.wrapper');
    cocktails.forEach((drink)=>{
        let boxContent= ` 
            <div class="drinkBox">
                <img class="cocktailPicture" src="./images/${drink.imageName}.jpg" />
                <p class = "drinkName"></p>
                <p class = "details"></p>
            </div>`;
        wrapperRef.append(boxContent);
    });
}


  $(document).ready(showInformation);
  