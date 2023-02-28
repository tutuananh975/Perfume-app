import { FC, useMemo, useEffect, useState, createContext } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../pages/Customeraccount/featurnes/useSlice';
import useFetchAxios from '../hooks/UseFetchAxios';
import Loading from '../components/Loading';

export const UserContext = createContext<any>({}); 

interface PropUserContext {
  children: any
}

const UserContextProvider:FC<PropUserContext> = ({children}) => {
  const { idUser } = useSelector(selectUser);
  const {responses, doFetch} = useFetchAxios('https://63782c6a5c477765122d0c95.mockapi.io/users/' + idUser)
  const {data: userData, isLoading} = responses;
  const [cart, setCart] = useState<any>([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if(idUser) {
      doFetch({method: "GET"})
    }
  }, [idUser, doFetch])

  const totalPrice = useMemo(() => {
    return cart.length > 0 
    ? cart.reduce((total: number, product: any) => {
      return total + product.ourPrice*product.amount;
    }, 0)
    : 0
  }, [cart])

  useEffect(() => {
    if(userData) {
      const getTotalItems = userData.cart.reduce((total: number, product: any) => {
        return total + product.amount;
      }, 0)
      setTotalItems(getTotalItems);
      setCart(userData.cart)
    }
  }, [userData])

  const handleSetCart = (newCart: any) => {
    setCart(newCart)
  }

  const handleSetTotalItems = (newTotalItems : number) => {
    setTotalItems(newTotalItems);
  }
  const value = {
    userData,
    cart,
    handleSetCart,
    totalItems, 
    handleSetTotalItems,
    totalPrice
  }

  return (
    <>
      {isLoading && <Loading />}
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserContextProvider