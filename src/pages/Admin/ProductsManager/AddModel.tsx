import Addproduct from "./Addproduct";
import Overflay from "../../../components/overflay/Overflay";

export default function Modal({showModal, onCloseModal, productEdit, isModalAddProduct} : any) {

  return (
    <>
      {showModal &&
        <div>
          <Overflay />
          <div className="modal-overlay" >
            <div className=" modal-box">
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