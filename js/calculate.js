//find value in number

function expenseCalculate(field){
    const expenseField = document.getElementById(field);

    const expenseValueString = expenseField.value;

    const expenseValue = parseFloat(expenseValueString);

            if(isNaN(expenseValue)){
                alert('input number in the all input field');
                return;
            }
            else{

                if(typeof(expenseValue) === 'number'){
                    return expenseValue;
                }
                else{
                    alert('Muntasir');
                }
                
            }

    
            
    


    
        

    
}


// total expense
function totalExpenseSum(FieldOne, FieldTwo, FieldThree){
    const FoodExpense =  expenseCalculate(FieldOne);
       

    const rentExpense =  expenseCalculate(FieldTwo);
    

    const clothExpense =  expenseCalculate(FieldThree);

 //    total expense

    const totalExpenseValue = FoodExpense + rentExpense + clothExpense;

  
        return totalExpenseValue;
    


     

       
}


document.getElementById('btn-calculate').addEventListener('click', function(){
    // const foodExpenseField = document.getElementById('food-field');

    // const foodExpenseValueString = foodExpenseField.value;

    // const foodExpenseValue = parseFloat(foodExpenseValueString);

    // const totalExpense = document.getElementById('total-expense');

    // totalExpense.innerText = foodExpenseValue;

    // total income
    // const incomeField = document.getElementById('income-field');

    // const incomeValueString = incomeField.value;



    /*income input */

    const incomeValue = expenseCalculate('income-field');

   
   
    // console.log(incomeValueString);



    // expenses

    //   const FoodExpense =  expenseCalculate('food-field');
       

    //    const rentExpense =  expenseCalculate('rent-field');
       

    //    const clothExpense =  expenseCalculate('cloth-field');

    // //    total expense

     const totalExpenseValue = totalExpenseSum('food-field','rent-field','cloth-field');



     const totalExpense = document.getElementById('total-expense');
     

     totalExpense.innerText = totalExpenseValue;

    console.log(totalExpenseValue);

    // total balance

    const totalBalance = incomeValue - totalExpenseValue;

    const balanceField = document.getElementById('total-balance');

    balanceField.innerText = totalBalance;

    console.log('total balance'+totalBalance);
       
})


// savings

document.getElementById('btn-save').addEventListener('click', function(){
    const saveField = document.getElementById('save-field');

    const saveFieldValueString = saveField.value;

    const saveFieldValue = parseFloat(saveFieldValueString);

    /********************** */

      // total income
    // const incomeField = document.getElementById('income-field');

    // const incomeValueString = incomeField.value;

    // const incomeValue = parseFloat(incomeValueString);

        // income input
    const totalIncome = expenseCalculate('income-field');

    /************************** */

    
    const saving = (totalIncome * saveFieldValue )/100;

    
    const saveBalanceField = document.getElementById('save-balance');
    

       saveBalanceField.innerText = saving;

    console.log(saveFieldValue);

    /****** remaining balance********** */
    

    const totalExpenseValue = totalExpenseSum('food-field','rent-field','cloth-field');
    console.log('total expense:', totalExpenseValue);

    const remainingBalance = totalIncome - totalExpenseValue - saving;

    const remainingfield = document.getElementById('remaining-balance');

    remainingfield.innerText = remainingBalance;

    

    

})


