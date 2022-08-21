

export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'Todo_add':
            
            return [ ...initialState, action.payload ];

        case 'Todo_remove':

            return initialState.filter( todo => todo.id !== action.payload );
    
        case 'Todo_toggle' :
            return initialState.map( todo =>{

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
            
            return todo;
            }

            )
        
        default:

            return initialState ;
    }

}