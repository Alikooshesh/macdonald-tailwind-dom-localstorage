const foodListWrapper = document.getElementById("food-item")

const foodMenu = [
    {
        id : 1,
        name : "همبرگر مخصوص",
        price : "10000",
        image : "file:///Users/alikooshesh/Desktop/untitled%20folder/1.PNG"
    },
    {
        id : 2,
        name : "همبرگر معمولی",
        price : "8000",
        image : "file:///Users/alikooshesh/Desktop/untitled%20folder/1.PNG"
    },
    {
        id : 3,
        name : "همبرگر مخصوص با قارچ و پنیر",
        price : "20000",
        image : "file:///Users/alikooshesh/Desktop/untitled%20folder/1.PNG"
    },
    {
        id : 4,
        name : "سالاد سزار        ",
        price : "25000",
        image : "file:///Users/alikooshesh/Desktop/untitled%20folder/4.PNG"
    }
]

let buyCart = []

function addFoodToCart(foodId){
    const foodIndexFinder = buyCart.findIndex(item => item.foodId == foodId)
    if(foodIndexFinder == -1){
        buyCart.push({
            foodId : foodId,
            count : 1
        })
    }else{
        buyCart[foodIndexFinder].count +=1
    }

    foodWrapperRender()
}

function removeFoodFromCard(foodId){
    const foodIndexFinder = buyCart.findIndex(item => item.foodId == foodId)

    if(foodIndexFinder >= 0){
        if(buyCart[foodIndexFinder].count > 1){
            buyCart[foodIndexFinder].count -=1
        }else{
            buyCart = buyCart.filter(item => item.foodId != foodId)
        }
    }

    foodWrapperRender()
}

function foodWrapperRender(){
    let finalFoodWrapperInnerHtml = ""
    foodMenu.forEach(item =>{
        const foodCountInBuyCart = buyCart.find(food => food.foodId === item.id)?.count ?? 0
       
        finalFoodWrapperInnerHtml += `
        <div class="food h-[130px]  bg-white rounded-[10px] p-[15px] ">
        <div class="w-[100%] h-[100%] flex justify-around items-center gap-[20px]">
            <div class="min-w-[100px] max-w-[100px] min-h-[80px] max-h-[80px] ">
                <img src="${item.image}" class="w-[100%] h-[100%]">
            </div>
            <div class="w-[35%] flex flex-col justify-between items-start gap-[10px] ">
                <p class="no-wrap">${item.name}</p>
                <p>${item.price} تومان</p>
                <div class="flex flex-row justify-start px-0 mx-0  gap-0">
                    <button
                        onclick="addFoodToCart(${item.id})"
                        class="w-[25px] h-[25px] pl-0 ml-0 flex justify-center items-center bg-[#9E1010] rounded-tr-[5px] rounded-br-[5px] ">
                        <svg class="font-bold" xmlns="http://www.w3.org/2000/svg" width="95%"
                            height="95%" fill="white" class="bi bi-plus" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                    <p id="number-food"
                        class="w-[25px] h-[25px] px-0 mx-0 flex justify-center items-center bg-[#F0F8FF]">
                        ${foodCountInBuyCart}
                    </p>
                    <button
                        onclick="removeFoodFromCard(${item.id})"
                        class="w-[25px] h-[25px] pr-0 mr-0 flex justify-center items-center bg-[#D1D5DB] rounded-tl-[5px] rounded-bl-[5px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="95%" height="95%" fill="white"
                            class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class=" w-[35%] flex flex-col justify-between items-end gap-[10px] ">
                <div>
                    <p class="invisible cost-sum">0 تومان</p>
                </div>
                <div>
                    <p class="invisible cost-sum">0 تومان</p>
                </div>
                <div>
                    <p class=" cost-sum">${foodCountInBuyCart * item.price} تومان</p>
                </div>
            </div>
        </div>
    </div>
        `

        foodListWrapper.innerHTML = finalFoodWrapperInnerHtml
    })
}

foodWrapperRender()