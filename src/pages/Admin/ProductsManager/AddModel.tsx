import Addproduct from "./Addproduct";
import Overflay from "../../../components/overflay/Overflay";

export default function Modal({showModal, onCloseModal, productEdit, isModalAddProduct} : any) {

  return (
    <>
      {showModal &&
        <div>
          <Overflay />
          <div className="modal-overlay" >
            <div className=" modal-box w-full md:w-3/5">
              <Addproduct  
                onCloseModal = {onCloseModal}
                productEdit = {productEdit}
                isModalAddProduct = {isModalAddProduct}
              />
            </div>
          </div>
        </div>
      }
    </>
  );
}