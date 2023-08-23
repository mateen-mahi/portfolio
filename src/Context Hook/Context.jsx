import React,{createContext,useContext} from 'react'

const  AppContext = createContext();

const AppProvider = ({children}) => {

const userData = {
    completedProject:"20",
    satisfiedClients:"19",
    experience:"01"
}
  return (
    <AppContext.Provider value={userData}>{children}</AppContext.Provider>
  )
}

const objectValue = ()=>{
    const data = useContext(AppContext)

    return data;
} 


export{AppProvider,objectValue}
