import { createContext, useState } from "react";

// defining a context
export const DynamicContext = createContext()


// provider component
export default function DynamicProvider ({children}) {

    // making a null state 
    const [contextValue , setContextValue]  = useState(null)


    return(
        <DynamicContext.Provider value={{contextValue , setContextValue}}>
            {children}
        </DynamicContext.Provider>
    )

}