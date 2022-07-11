console.log('file of redux');

const CAKE_ORDERED='CAKE_ORDERED'


function ordercake(){
return{

    type:CAKE_ORDERED,
}
}

const initailState={

    numOfCake:10,


}
const reducer=(state=initailState,action)=>{
   

    switch (action.type) {
        case CAKE_ORDERED:
            return{
                numOfCake:state.numOfCake-1
            }
    
        default:
          return state
    }

}